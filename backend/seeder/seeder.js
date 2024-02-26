import mongoose from "mongoose"
import Product from "../models/productModel.js";
import data from "./data.js";

const seedProduct = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Elite-shop");
        await Product.deleteMany();
        console.log("Products are deleted");
        await Product.insertMany(data);
        console.log("Products are created");

        process.exit();
    } catch (error) {
        console.log(error);
        process.exit();
    }
}
seedProduct();