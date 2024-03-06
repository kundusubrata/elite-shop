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

const userRoutes = () => {
  return (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

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
    </>
  );
};

export default userRoutes;
