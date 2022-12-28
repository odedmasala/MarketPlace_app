const receiptModel = require("../../models/receipt/ReceiptSchema");

const findAllReceipts = async () => {
  try {
    const receipts = await receiptModel.find();
    return receipts;
  } catch (error) {
    throw error;
  }
};
const findAllReceiptForUser = async (user) => {
  try {
    const receipts = await receiptModel.find({"users":user});
    return receipts;
  } catch (error) {
    throw error;
  }
};

const findReceiptById = async (id) => {
  try {
    const receipt = await receiptModel.findById(id);
    return receipt;
  } catch (error) {
    throw error;
  }
};

const createOneReceipt = async (obj) => {
  try {
    const receipt = new receiptModel(obj);
    await receipt.save();
    return "Created";
  } catch (error) {
    throw error;
  }
};

const updateOneReceipt = async (id, obj) => {
  try {
    await receiptModel.findByIdAndUpdate(id, obj);
    return "Updated";
  } catch (error) {
    throw error;
  }
};

const deleteOneReceipt = async (id) => {
  try {
    await receiptModel.findByIdAndDelete(id);
    return "Deleted";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findAllReceipts,
  findReceiptById,
  createOneReceipt,
  deleteOneReceipt,
  updateOneReceipt,
  findAllReceiptForUser
};
