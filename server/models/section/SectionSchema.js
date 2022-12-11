const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema(
  {
    name: String,
    image: {
      type: String,
      required: true,
    },
    storesId: { type: mongoose.Types.ObjectId,ref:"store" },
    departmentIds: { type: mongoose.Types.ObjectId,ref:"department" },
    createdAt: string,
    createdBy: string,
    updateAt: string,
    active: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model('section', SectionSchema);
