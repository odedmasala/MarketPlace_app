const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId(),
    name: String,
    image: {
      type: String,
      required: true,
    },
    storesId: { type: mongoose.Types.ObjectId() },
    departmentIds: { type: mongoose.Types.ObjectId() },
    createdAt: string,
    createdBy: string,
    updateAt: string,
    active: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model('section', SectionSchema);
