const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    _id: new mongoose.Types.ObjectId(),
    image: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      min: 8,
      max: 50,
    },
    phone: {
      type: String,
      required: true,
      min: 9,
      unique: true,
    },
    loginCode: String,
    meager: {
      type: Boolean,
      default: null,
    },
    role: {
      type: String,
      default: null,
    },
    phone2: {
      type: String,
      min: 9,
    },
    password: {
      type: String,
      required: true,
    },
    storeId: {
      type: mongoose.Types.ObjectId(),
    },
    storeIds: {
      type: [String],
    },
    address: {
      type: Object,
      required: true,
      city: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
      building: {
        type: Number,
        required: true,
      },
      apartment: {
        type: Number,
        required: true,
      },
      floor: Number,
      comment: String,
    },
    paymentBillInfo: { type: mongoose.Types.ObjectId() },
    authToken: { type: String },
  },
  { timestamps: true }
);

const model = mongoose.model("users", UserSchema);
module.exports = model;
