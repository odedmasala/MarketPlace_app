const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  public_id: { type: String},
  url: { type: String},

})
const DepartmentSchema = new mongoose.Schema({
  // name: { type: String, required: true },
  image: imageSchema,
  active: Boolean,
  createdAt: String,
  createdBy: String,
  updateAt: String,
});

const model = mongoose.model("department", DepartmentSchema);
module.exports = model;
