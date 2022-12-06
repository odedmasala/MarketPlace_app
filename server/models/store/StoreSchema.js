const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema(
  {
    id: String,
    bnNumber: String,
    name: String,
    description: String,
    logo: String,
    lightlogo: String,
    darklogo: String,
    coverImage: String,
    phone: String,
    email: String,
    sectionIds: String,
    address: {
      city: String,
      street: String,
      building: String,
      apartment: String,
      floor: Number,
    },
    lastUpdate: String,
    createdAt: String,
    createdBy: String,
  },
  { timestamps: true }
);
const model = mongoose.model('Store', StoreSchema);
module.exports = model;
