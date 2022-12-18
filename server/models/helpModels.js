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

module.exports = {
  addressSchema,
  billInfoSchema,
};
