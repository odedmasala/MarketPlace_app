const mongoose = require("mongoose");

const SectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  store: { type: mongoose.Types.ObjectId, ref: "stores" },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String },
  updateAt: { type: Date, default: Date.now },
});

const model = mongoose.model("sections", SectionSchema);
module.exports = model;
