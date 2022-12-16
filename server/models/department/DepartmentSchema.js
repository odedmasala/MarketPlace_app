const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: {
    type: String,
    required: true,
  },
  active: Boolean,
  stores: {
    type: [mongoose.Types.ObjectId],
    ref: "stores",
  },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String },
  updateAt: { type: Date, default: Date.now },
});

const model = mongoose.model("departments", DepartmentSchema);
module.exports = model;
