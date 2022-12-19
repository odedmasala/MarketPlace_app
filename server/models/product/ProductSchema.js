const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  image: {
    public_id: String,
    url: String,
  },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  store: {
    type: mongoose.Types.ObjectId,
    ref: "stores",
    required: true,
  },
  subCategory: {
    type: [mongoose.Types.ObjectId],
    ref: "sections",
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
