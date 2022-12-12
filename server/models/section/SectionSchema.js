const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema(
  {
    name: String,
    storesId: { type: mongoose.Types.ObjectId, ref: 'store' },
    productIds: { type: mongoose.Types.ObjectId, ref: 'product' },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: String, required: true, noSearch: true },
    updateAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('section', SectionSchema);
