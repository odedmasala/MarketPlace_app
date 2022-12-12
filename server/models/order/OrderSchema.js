const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String, required: true, noSearch: true },
  updateAt: { type: Date, default: Date.now },
});

const model = mongoose.model("orders", OrderSchema);
module.exports = model;
