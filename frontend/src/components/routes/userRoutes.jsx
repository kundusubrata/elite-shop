import React, { lazy } from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "../auth/ProtectedRoute";

const Home = lazy(() => import("../Home"));
const ProductDetails = lazy(() => import("../product/ProductDetails"));
const Login = lazy(() => import("../auth/Login"));
const Register = lazy(() => import("../auth/Register"));
const Profile = lazy(() => import("../user/Profile"));
const UpdateProfile = lazy(() => import("../user/UpdateProfile"));
const UploadAvatar = lazy(() => import("../user/UploadAvatar"));
const UpdatePassword = lazy(() => import("../user/UpdatePassword"));
const ForgotPassword = lazy(() => import("../auth/ForgotPassword"));
const ResetPassword = lazy(() => import("../auth/ResetPassword"));
const Cart = lazy(() => import("../cart/Cart"));

const userRoutes = () => {
  return (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/password/forgot" element={<ForgotPassword />} />
      <Route path="/password/reset/:token" element={<ResetPassword />} />

      <Route
        path="/me/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/me/update_profile"
        element={
          <ProtectedRoute>
            <UpdateProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/me/upload_avatar"
        element={
          <ProtectedRoute>
            <UploadAvatar />
          </ProtectedRoute>
        }
      />
      <Route
        path="/me/update_password"
        element={
          <ProtectedRoute>
            <UpdatePassword />
          </ProtectedRoute>
        }
      />

      <Route path="/cart" element={<Cart />} />
    </>
  );
};

export default userRoutes;
