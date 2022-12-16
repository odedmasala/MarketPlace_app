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
    type: [mongoose.Types.ObjectId],
    ref: "section",
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
  description: String,
  gender: String,
  createBy: String,
  createdAt: { type: Date, default: Date.now },
  lastUpdate: { type: Date, default: Date.now },
});

const model = mongoose.model("products", ProductSchema);
module.exports = model;
