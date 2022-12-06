const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId(),
  image: {
    type: String,
    required: true,
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true, min: 8, max: 50 },
  phone: { type: String, required: true, min: 9, unique: true },
  loginCode: String,
  meager: {
    type: Boolean,
    default: null,
  },
  phone2: { type: String, min: 9 },
  password: { type: String, required: true },
  storeId: mongoose.Types.ObjectId(),
  address: { type: Object, required: true },
  paymentBillInfo: String,
  authToken: String,
});

const model = mongoose.model("users", UserSchema);
module.exports = model;
