const mongoose = require("mongoose");
const { addressSchema } = require("../helpModels");

const StoreManagerSchema = new mongoose.Schema(
  {
    image: {
      public_id: String,
      url: String,
      // required: true,
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
    meager: {
      type: Boolean,
      default: null,
    },
    phone2: {
      type: String,
      min: 9,
    },
    password: {
      type: String,
      required: true,
    },
    stores: {
      type: [mongoose.Types.ObjectId],
      ref: "stores",
    },
    address: { type: addressSchema, required: true },
    paymentBillInfo: { type: mongoose.Types.ObjectId, ref: "receipts" },
    authToken: { type: String },
    role: {
      type: String,
      formType: "select",
      tableType: "string",
      enum: ["store", "admin", "owner", "delivery"],
      default: "store",
    },
    permission: {
      type: String,
      formType: "select",
      tableType: "string",
      enum: ["read", "write"],
      default: "read",
    },
    registerType: {
      type: String,
      enum: ["email", "facebook", "google"],
      default: "email",
    },
  },
  { timestamps: true }
);

const model = mongoose.model("storeManagers", StoreManagerSchema);
module.exports = model;
