const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId(),
  image: {
    type: String,
    required: true,
  },
  name: { type: String, required: true },
  price:  { type: String, required: true },
  storeId: {
    type:mongoose.Types.ObjectId(),
    required:true
  },
  subCategory: {
    type:mongoose.Types.ObjectId(),
    required:true
  },
  weight: String,
  avgWeightPerUnit: String,
  weightUnit: String,
  amount: String,
  measureUnits: String,
  deliveryOrderPlace: String,
  contactInfo: String,
  manufacture: String,
  brand: {
    type:String,
    required:true
  },
  productStock: String,
  lastUpdate: String,
  description: String,
  createBy: String,
  gender:  {
    type:String,
    required:true
  },
});

const model = mongoose.model('products', ProductSchema);
module.exports = model;
