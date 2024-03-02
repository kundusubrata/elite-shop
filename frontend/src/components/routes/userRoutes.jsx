import React, { lazy} from "react";
import { Route } from "react-router-dom";
// import Home from "../Home";
// import ProductDetails from "../product/ProductDetails";

const Home = lazy(() => import("../Home"));
const ProductDetails = lazy(() => import("../product/ProductDetails"));

const userRoutes = () => {
  return (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </>
  );
};

export default userRoutes;
