import express from "express";
const app = express();
import dotenv from "dotenv";
import { connectDatabase } from "./config/dbConnect.js";
import errorMiddlewares from "./middlewares/errors.js";
import cookieParser from "cookie-parser";

// Handled Uncaught Exceptions(problem in log(krishna))
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err}`);
  console.log(`Shutting down server due to uncaught exceptions`);
  process.exit(1);
});

dotenv.config({ path: "./backend/config/config.env" });

//Connecting to Database
connectDatabase();

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

//Import All Routers
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

app.use("/api/v1/", productRoutes);
app.use("/api/v1/", userRoutes);

// Using errors middlewares
app.use(errorMiddlewares);

// console.log(krishna);

const server = app.listen(process.env.PORT, () => {
  console.log(
    `The server is listening on: http://localhost:${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});

// Handle Unhandle Promise Rejections(Problem in db string)
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err}`);
  console.log(`Shutting down server due to unhandled promise rejections`);
  server.close(() => {
    process.exit(1);
  });
});
