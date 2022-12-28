require("dotenv").config();
const mongoose = require("mongoose");
const Products = require("../models/product/ProductSchema");
const Stores = require("../models/store/StoreSchema");
const Department = require("../models/department/DepartmentSchema");
const Section = require("../models/section/SectionSchema");

const connectDB = () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(
      process.env.MONGO_URL,
      {
        useNewUrlParser: true,
      }

    );
    console.log("The DB login was successful");
  } catch (error) {
    throw error;
  }
};

module.exports = connectDB;
