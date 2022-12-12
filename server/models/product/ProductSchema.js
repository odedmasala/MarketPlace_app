const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  storeId: {
    type: mongoose.Types.ObjectId,
    ref: "store",
    required: true,
  },
  subCategory: {
    type: mongoose.Types.ObjectId,
    ref: "section",
    required: true,
  },
  weight: String,
  avgWeightPerUnit: String,
  weightUnit: String,
  amount: String,
  measureUnits: String,
  deliveryOrderPlace: String,
  contactInfo: String,
  manufacture: String,
  brand: {
    type: String,
    required: true,
  },
  productStock: String,
  lastUpdate: { type: Date, default: Date.now },
  description: String,
  createBy: String,
  gender: String,
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String },
});

const model = mongoose.model("products", ProductSchema);
module.exports = model;
