const mongoose = require("mongoose");
const { addressSchema, cloudinarySchema, userAddressSchema } = require("../helpModels");

const UserSchema = new mongoose.Schema(
  {
    image: cloudinarySchema,
    social_image: String,
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
      lowercase: true,
      min: 8,
      max: 50,
      
    },
    phone: {
      type: String,
      min: 9,
  
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
    address: userAddressSchema,
    paymentBillInfo: { type: [mongoose.Types.ObjectId], ref: "receipts" },
    authToken: { type: String },
    access_token: String,
    facebook_id: {
      type: String,
    },
    googleToken: {
      type: String,
    },
    resetPassToken: {
      type: String,
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
