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
    type: Number,
    required: true,
  },
  apartment: {
    type: Number,
    required: true,
  },
  floor: Number,
  comment: String,
});
const UserSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      min: 8,
      max: 50,
    },
    phone: {
      type: String,
      required: true,
      min: 9,
      unique: true,
    },
    loginCode: String,
    password: {
      type: String,
      required: true,
    },
    storeId: {
      type: [mongoose.Types.ObjectId],
      ref: "store",
    },
    storeIds: {
      type: [String],
    },
    address: { type: addressSchema, required: true },
    paymentBillInfo: { type: mongoose.Types.ObjectId, ref: "receipt" },
    authToken: { type: String },
  },
  { timestamps: true }
);

const model = mongoose.model("users", UserSchema);
module.exports = model;
