const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    image: string,
    storesId: string,
    departmentIds: string,
    createdAt: string,
    createdBy: string,
    updateAt: string,
    active: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model('section', SectionSchema);
