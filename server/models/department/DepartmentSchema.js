const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: {
    type: String,
    required: true,
  },
  active: Boolean,
  createdAt: String,
  createdBy: String,
  updateAt: String,
});

const model = mongoose.model('department', DepartmentSchema);
module.exports = model;
