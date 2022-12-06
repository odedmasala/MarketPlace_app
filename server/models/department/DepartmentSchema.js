const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId(),
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

const model = mongoose.model('Department', DepartmentSchema);
module.exports = model;
