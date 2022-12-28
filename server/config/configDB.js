require("dotenv").config();
const mongoose = require("mongoose");
const Products = require("../models/product/ProductSchema");
const Stores = require("../models/store/StoreSchema");
const Department = require("../models/department/DepartmentSchema");
const Section = require("../models/section/SectionSchema");
const StoreManager = require("../models/storemanager/StoreManagerSchema")
// const {
//   combineProducts,
//   combineSections,
//   departments,
//   stores,
//   managers
// } = require("../data");
// const insertData = async () => {
//   try {
//     const insertDepartments = await Department.insertMany(departments);
//     const insertStore = await Stores.insertMany(stores);
//     const insertSection = await Section.insertMany(combineSections);
//     const insertProducts = await Products.insertMany(combineProducts);
//     const insertManagers = await StoreManager.insertMany(managers);
//     console.log(insertDepartments, insertStore, insertSection, insertProducts);
//   } catch (e) {
//     throw e;
//   }
// };
const connectDB = () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(
      process.env.MONGO_URL,
      {
        useNewUrlParser: true,
      }
      // ,async () => {
      //   await Department.insertMany(departments);
      //   await Stores.insertMany(stores);
      //   await Section.insertMany(combineSections);
      //   await Products.insertMany(combineProducts);
      //   await StoreManager.insertMany(managers);
      // }
    );
    console.log("The DB login was successful");
  } catch (error) {
    throw error;
  }
};

module.exports = connectDB;
