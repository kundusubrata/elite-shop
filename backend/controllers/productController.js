import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Product from "../models/productModel.js";
import APIFilters from "../utils/apiFilters.js";
import ErrorHandler from "../utils/errorHandler.js";

// All Product   ==>  /api/v1/products
export const getProducts = catchAsyncErrors(async (req, res, next) => {
  const resPerPage = 4;
  const apiFilters = new APIFilters(Product, req.query).search().filters();

  // console.log("req user", req?.user); // check for isAuthenticatedUser in auth.js

  let products = await apiFilters.query;
  let filterProductCount = products.length;

  // return next(new ErrorHandler("Product Error",400));  // This is for checking error in toast

  apiFilters.pagination(resPerPage);
  products = await apiFilters.query.clone();

  res.status(200).json({
    success: true,
    message: "All Products",
    resPerPage,
    filterProductCount,
    products,
  });
});

// Create New Product -- ADMIN  ==> /api/v1/admin/products
export const newProduct = catchAsyncErrors(async (req, res, next) => {
  // if (!req.user || !req.user._id) {
  //   return next(new ErrorHandler("User not authenticated", 401));
  // }

  req.body.user = req.user._id;

  const product = await Product.create(req.body);

  res.status(200).json({
    success: true,
    message: "Product Created",
    product,
  });
});

//Get Single Product   ==>   /api/v1/products/:id
export const getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    // res.status(404).json({
    //   error: "Product not found with this id",
    // });
    return next(new ErrorHandler("Product not found with this id", 404));
  }

  res.status(200).json({
    success: true,
    message: "Single Product",
    product,
  });
});

// Update Product -- ADMIN   ==> /api/v1/admin/products/:id
export const updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    // res.status(404).json({
    //   error: "Product not found with this id",
    // });
    return next(new ErrorHandler("Product not found with this id", 404));
  }
  product = await Product.findByIdAndUpdate(req?.params?.id, req.body, {
    new: true,
  });

  res.status(200).json({
    success: true,
    message: "Product Updated",
    product,
  });
});

// Delete Product -- ADMIN   ==>  /api/v1/admin/products/:id
export const deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req?.params?.id);
  if (!product) {
    // res.status(404).json({
    //   error: "Product not found with this id",
    // });
    return next(new ErrorHandler("Product not found with this id", 404));
  }

  // delete image from cloudinary

  await Product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product deleted",
  });
});

// Create/Update product review   =>  /api/v1/reviews
export const createProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req?.user?._id,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  const isReviewed = product?.reviews?.find(
    (r) => r.user.toString() === req?.user?._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((review) => {
      if (review?.user?.toString() === req?.user?._id.toString()) {
        review.comment = comment;
        review.rating = rating;
      }
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  product.ratings =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get product reviews   =>  /api/v1/reviews
export const getProductReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    reviews: product.reviews,
  });
});

// Delete product review   =>  /api/v1/admin/reviews
export const deleteReview = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.query.productId);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  const reviews = product?.reviews?.filter(
    (review) => review._id.toString() !== req?.query?.id.toString()
  );

  const numOfReviews = reviews.length;

  const ratings =
    numOfReviews === 0
      ? 0
      : product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        numOfReviews;

  product = await Product.findByIdAndUpdate(
    req.query.productId,
    { reviews, numOfReviews, ratings },
    { new: true }
  );

  res.status(200).json({
    success: true,
    product,
  });
});