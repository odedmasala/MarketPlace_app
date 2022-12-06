const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  id: String,
  image: String,
  name: String,
  price: String,
  storeId: String,
  subCategory: String,
  weight: String,
  avgWeightPerUnit: String,
  weightUnit: String,
  amount: String,
  measureUnits: String,
  deliveryOrderPlace: String,
  contactInfo: String,
  manufacture: String,
  brand: String,
  productStock: String,
  lastUpdate: String,
  description: String,
  createBy: String,
  gender: String,
});

const model = mongoose.model("products", ProductSchema);
module.exports = model;
