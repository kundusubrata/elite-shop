import express from "express";
const app = express();
import dotenv from "dotenv";
import { connectDatabase } from "./config/dbConnect.js";


dotenv.config({ path: "./backend/config/config.env" });

//Connecting to Database
connectDatabase();

app.use(express.json());

//Import All Routers
import productRoutes from "./routes/productRoutes.js";

app.use("/api/v1/", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(
    `The server is listening on: http://localhost:${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
