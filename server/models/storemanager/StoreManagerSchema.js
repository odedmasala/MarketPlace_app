const mongoose = require("mongoose");
const { addressSchema, cloudinarySchema } = require("../helpModels");

const StoreManagerSchema = new mongoose.Schema({
  // image: cloudinarySchema,
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

    min: 8,
    max: 50,
  },
  phone: {
    type: String,
    required: true,
    min: 9,

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
  address: addressSchema,
  // paymentBillInfo: { type: mongoose.Types.ObjectId, ref: "receipts" },
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
  lastUpdate: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String },
});

const model = mongoose.model("storeManagers", StoreManagerSchema);
module.exports = model;
