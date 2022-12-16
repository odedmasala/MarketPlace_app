const mongoose = require("mongoose");

const SectionSchema = new mongoose.Schema(
  {
    name: String,
    store: { type: mongoose.Types.ObjectId, ref: "stores" },
    products: { type: [mongoose.Types.ObjectId], ref: "products" },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: String },
    updateAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("sections", SectionSchema);
