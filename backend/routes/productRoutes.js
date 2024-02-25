
import express from "express";
import { products } from "../controllers/productController.js";

const router = express.Router();

router.route("/products").get(products);


export default router;
