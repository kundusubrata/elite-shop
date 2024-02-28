import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Product from "../models/productModel.js";
import APIFilters from "../utils/apiFilters.js";
import ErrorHandler from "../utils/errorHandler.js";

// All Product   ==>  /api/v1/products
export const getProducts = catchAsyncErrors(async (req, res, next) => {
  const resPerPage = 4;
  const apiFilters = new APIFilters(Product, req.query).search().filters();

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
