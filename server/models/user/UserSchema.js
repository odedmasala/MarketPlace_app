const mongoose = require("mongoose");
const {addressSchema} = require("../helpModels")

const UserSchema = new mongoose.Schema(
  {
    image: String,
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
      min: 9,
      unique: true,
    },
    loginCode: String,
    password: {
      type: String,
      min: 8,
    },
    stores: {
      type: [mongoose.Types.ObjectId],
      ref: "stores",
    },
    address: { type: addressSchema },
    paymentBillInfo: { type: [mongoose.Types.ObjectId], ref: "receipts" },
    authToken: { type: String },
    access_token: String,
    facebookToken: {
      type: String,
      select: false,
    },
    googleToken: {
      type: String,
      select: false,
    },
    resetPassToken: {
      type: String,
      select: false,
    },
    registerType: {
      type: String,
      enum: ["email", "facebook", "google"],
      default: "email",
    },
  },
  { timestamps: true }
);

const model = mongoose.model("users", UserSchema);
module.exports = model;
