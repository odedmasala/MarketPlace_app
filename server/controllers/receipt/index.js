const {
  createReceipt,
  deleteReceipt,
  getAllReceipts,
  getReceiptById,
  updateReceipt,
} = require("./DAL");

const getAllReceipts = async (req, res, next) => {
  try {
    const receipts = await getAllReceipts();
    res.status(200).json(receipts);
  } catch (err) {
    next(err);
  }
};

const getReceiptById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const receipt = await getReceiptById(id);
    res.status(200).json(receipt);
  } catch (err) {
    next(err);
  }
};

const createReceipt = async (req, res, next) => {
  try {
    const obj = req.body;
    const result = await createReceipt(obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const updateReceipt = async (req, res, next) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await updateReceipt(id, obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const deleteReceipt = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteReceipt(id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllReceipts,
  getReceiptById,
  createReceipt,
  updateReceipt,
  deleteReceipt,
};
