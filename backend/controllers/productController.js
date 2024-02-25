



// All Product ==>  /api/v1/products
export const products = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "All Products",
  });
};
