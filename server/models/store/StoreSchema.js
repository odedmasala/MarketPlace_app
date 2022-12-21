const mongoose = require("mongoose");
const { addressSchema } = require("../helpModels");
const StoreSchema = new mongoose.Schema(
  {
    bnNumber: String,
    name: { type: String, required: true },
    description: { type: String, required: true },
    logo: {
      public_id: String,
      url: String,
      required: true,
    },
    lightlogo: String,
    darklogo: String,
    coverImage: String,
    phone: { type: String, required: true,},
    email: { type: String, required: true, },
    department: { type: mongoose.Types.ObjectId, ref: "Departments" },
    address: { type: addressSchema, required: true },
    lastUpdate: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: String },
  },
);
const model = mongoose.model("stores", StoreSchema);
module.exports = model;
