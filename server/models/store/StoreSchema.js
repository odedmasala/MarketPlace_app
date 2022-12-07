const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema(
  {
    _id:new mongoose.Types.ObjectId(),
    bnNumber: String,
    name: { type: String, required: true },
    description: { type: String, required: true },
    logo: String,
    lightlogo: String,
    darklogo: String,
    coverImage: String,
    phone: { type: String, required: true, min: 9, unique: true },
    email: { type: String, required: true, unique: true, min: 8, max: 50 },
    sectionIds: { type:mongoose.Types.ObjectId() },
    address: {
      type: Object,
      required: true,
    },
    lastUpdate: String,
    createdAt: String,
    createdBy: String,
  },
  { timestamps: true }
);
const model = mongoose.model('Store', StoreSchema);
module.exports = model;
