import React, { lazy} from "react";
import { Route } from "react-router-dom";
// import Home from "../Home";
// import ProductDetails from "../product/ProductDetails";

const Home = lazy(() => import("../Home"));
const ProductDetails = lazy(() => import("../product/ProductDetails"));
const Login = lazy(() => import("../auth/Login"));
const Register = lazy(() => import("../auth/Register"));

const userRoutes = () => {
  return (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </>
  );
};

export default userRoutes;
