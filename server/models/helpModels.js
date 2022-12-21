const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  building: {
    type: String,
    required: true,
  },
  apartment: Number,
  floor: Number,
  comment: String,
});

const billInfoSchema = new mongoose.Schema({
  price: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  discount: Number,
  tax: Number,
});

const weightSchema = new mongoose.Schema({
  inWeight: Boolean,
  avgWeightPerUnit: { type: Number, min: 0 },
  weightUnit: {
    type: String,
    enum: ["kgs", "grams", "liters", "mls"],
    default: "kgs",
  },
  tax: Number,
});

const unitsSchema = new mongoose.Schema({
  unitsInCarton: {
    type: Number,
    default: 1,
    min: 0,
  },
  amount: {
    type: Number,
    default: 1,
    min: 0,
  },
  minimumOrderCartonsCount: {
    type: Number,
    default: 1,
  },
  measureUnits: {
    type: String,
    default: "units",
    enum: ["units", "kgs", "grams", "liters", "mls"],
  },
});

const ClothingSizesSchema = new mongoose.Schema({
  inClothingSize: Boolean,
  gender: {
    type: String,
    enum: ["women", "men", "children", "teenagers", "babies"],
    default: "women",
  },
  weightUnit: {
    type: String,
    enum: ["sm", "s", "m", "l", "xl", "xxl", "xxxl"],
    default: "m",
  },
  tax: Number,
});
module.exports = {
  addressSchema,
  billInfoSchema,
  weightSchema,
  unitsSchema,
  ClothingSizesSchema,
};
