const mongoose = require("mongoose");
const {
  unitsSchema,
  weightSchema,
  ClothingSizesSchema,
  cloudinarySchema,
} = require("../helpModels");

const ProductSchema = new mongoose.Schema({
  barcode: {
    type: Number,
    default: () => Math.floor(Math.random() * 1000000000000),

  },
  image: cloudinarySchema,
  name: { type: String, required: true },
  price: { type: Number, required: true },
  storeId: { type: mongoose.Types.ObjectId, ref: "stores", required: true },
  subCategory: {
    type: mongoose.Types.ObjectId,
    ref: "sections",
  },
  weight: weightSchema,
  unit: unitsSchema,
  gender: {
    type: String,
    enum: ["women", "men", "children", "teenagers", "babies", "unisex"],
  },
  quantity: { type: Number, required: true, min: 0 },
  // clothing: { type: ClothingSizesSchema },
  manufacture: String,
  brand: String,
  active: { type: Boolean, default: true },
  description: String,
  createBy: String,
  createdAt: { type: Date, default: Date.now },
  lastUpdate: { type: Date, default: Date.now },
});

const model = mongoose.model("products", ProductSchema);
module.exports = model;
