import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config({ path: "./backend/config/config.env" });

//Import All Routers
import productRoutes from "./routes/productRoutes.js";

app.use("/api/v1/", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(
    `The server is listening on: http://localhost:${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
