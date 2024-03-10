import React, { lazy } from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "../auth/ProtectedRoute";

const Dashboard = lazy(() => import("../admin/DashBoard"));
const ListProducts = lazy(() => import("../admin/ListProducts"));
const NewProduct = lazy(() => import("../admin/NewProduct"));
const UpdateProduct = lazy(() => import("../admin/UpdateProduct"));
const UploadImages = lazy(() => import("../admin/UploadImages"));
const ListOrders = lazy(() => import("../admin/ListOrders"));
const ProcessOrder = lazy(() => import("../admin/ProcessOrder"));
const ListUsers = lazy(() => import("../admin/ListUsers"));
const UpdateUser = lazy(() => import("../admin/UpdateUser"));
const ProductReviews = lazy(() => import("../admin/ProductReviews"));

const adminRoutes = () => {
  return (
    <>
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute admin={true}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/products"
        element={
          <ProtectedRoute admin={true}>
            <ListProducts />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/product/new"
        element={
          <ProtectedRoute admin={true}>
            <NewProduct />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/products/:id"
        element={
          <ProtectedRoute admin={true}>
            <UpdateProduct />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/products/:id/upload_images"
        element={
          <ProtectedRoute admin={true}>
            <UploadImages />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/orders"
        element={
          <ProtectedRoute admin={true}>
            <ListOrders />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/orders/:id"
        element={
          <ProtectedRoute admin={true}>
            <ProcessOrder />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          <ProtectedRoute admin={true}>
            <ListUsers />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/users/:id"
        element={
          <ProtectedRoute admin={true}>
            <UpdateUser />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/reviews"
        element={
          <ProtectedRoute admin={true}>
            <ProductReviews />
          </ProtectedRoute>
        }
      />
    </>
  );
};

export default adminRoutes;
