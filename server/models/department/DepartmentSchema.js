const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: {
    type: String,
    required: true,
  },
  active: Boolean,
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String, required: true, noSearch: true },
  updateAt: { type: Date, default: Date.now },
});

const model = mongoose.model("department", DepartmentSchema);
module.exports = model;
