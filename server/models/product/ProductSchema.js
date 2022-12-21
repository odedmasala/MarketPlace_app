const mongoose = require("mongoose");
const {
  unitsSchema,
  weightSchema,
  ClothingSizesSchema,
} = require("../helpModels");

const ProductSchema = new mongoose.Schema({
  image: {
    public_id: String,
    url: String,
  },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  storeId: { type: mongoose.Types.ObjectId, ref: "stores", required: true },
  subCategory: {
    type: mongoose.Types.ObjectId,
    ref: "sections",
  },
  weight: { type: weightSchema },
  unit: { type: unitsSchema },
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
