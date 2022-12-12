const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema(
  {
    name: String,
    storesId: { type: mongoose.Types.ObjectId, ref: 'store' },
    productIds: { type: mongoose.Types.ObjectId, ref: 'product' },
    createdAt: String,
    createdBy: String,
    updateAt: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('section', SectionSchema);
