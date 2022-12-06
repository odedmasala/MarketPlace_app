const receiptModel = require("../../models/receipt/ReceiptSchema");

const getAllReceipts = async () => {
  try {
    const receipts = await receiptModel.find();
    return receipts;
  } catch (error) {
    throw error;
  }
};

const getReceiptById = async (id) => {
  try {
    const receipt = await receiptModel.findById(id);
    return receipt;
  } catch (error) {
    throw error;
  }
};

const createReceipt = async (obj) => {
  try {
    const receipt = new receiptModel(obj);
    await receipt.save();
    return "Created";
  } catch (error) {
    throw error;
  }
};

const updateReceipt = async (id, obj) => {
  try {
    await receiptModel.findByIdAndUpdate(id, obj);
    return "Updated";
  } catch (error) {
    throw error;
  }
};

const deleteReceipt = async (id) => {
  try {
    await receiptModel.findByIdAndDelete(id);
    return "Deleted";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllReceipts,
  getReceiptById,
  createReceipt,
  updateReceipt,
  deleteReceipt,
};
