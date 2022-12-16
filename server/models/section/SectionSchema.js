const mongoose = require("mongoose");

const SectionSchema = new mongoose.Schema(
  {
    name: String,
    storeId: { type: mongoose.Types.ObjectId, ref: "store" },
    productIds: { type: mongoose.Types.ObjectId, ref: "product" },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: String },
    updateAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("sections", SectionSchema);
