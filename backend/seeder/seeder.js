import mongoose from "mongoose";
import Product from "../models/productModel.js";
import data from "./data.js";

const seedProduct = async () => {
  try {
    // await mongoose.connect("mongodb://localhost:27017/Elite-shop");
    await mongoose.connect(
      "mongodb://kundusubrata2020:kundusubrata2020@ac-d27qgie-shard-00-00.ul2twgh.mongodb.net:27017,ac-d27qgie-shard-00-01.ul2twgh.mongodb.net:27017,ac-d27qgie-shard-00-02.ul2twgh.mongodb.net:27017/Elite-shop?ssl=true&replicaSet=atlas-ga9iuz-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Elite-shop"
    );
    await Product.deleteMany();
    console.log("Products are deleted");
    await Product.insertMany(data);
    console.log("Products are created");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
seedProduct();
