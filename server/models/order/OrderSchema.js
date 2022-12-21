const mongoose = require("mongoose");
const { addressSchema, billInfoSchema } = require("../helpModels");

const OrderSchema = new mongoose.Schema({
  orderFromStores: {
    type: [mongoose.Types.ObjectId],
    ref: "store",
    required: true,
  },
  user: { type: mongoose.Types.ObjectId, ref: "users", required: true },
  products: { type: [mongoose.Types.ObjectId], ref: "products", required: true },
  billInfo: billInfoSchema,
  address: addressSchema,
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String },
  updateAt: { type: Date, default: Date.now },
});

const model = mongoose.model("orders", OrderSchema);
module.exports = model;
