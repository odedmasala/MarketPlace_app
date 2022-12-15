const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema(
  {
    bnNumber: String,
    name: { type: String, required: true },
    description: { type: String, required: true },
    logo: String,
    lightlogo: String,
    darklogo: String,
    coverImage: String,
    phone: { type: String, required: true, min: 9, unique: true },
    email: { type: String, required: true, unique: true, min: 8, max: 50 },
    sectionIds: { type: mongoose.Types.ObjectId, ref: "section" },
    address: {
      type: Object,
      required: true,
    },
    lastUpdate: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: String},
  },
  { timestamps: true }
);
const model = mongoose.model("store", StoreSchema);
module.exports = model;
