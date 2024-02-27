import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home";

const userRoutes = () => {
  return (
    <>
      <Route path="/" element={<Home />} />
    </>
  );
};

export default userRoutes;
