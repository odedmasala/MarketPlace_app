const {
  createOneReceipt,
  deleteOneReceipt,
  findAllReceipts,
  findReceiptById,
  updateOneReceipt,
  findAllReceiptForUser
} = require("./DAL");

const getAllReceipts = async (req, res, next) => {
  try {
    let receipts =[]
    if(req.query.userId){
      let user = req.query.userId;
      receipts = await findAllReceiptForUser(user)
    }else{
      receipts = await findAllReceipts();
    }
     
    res.status(200).json(receipts);
  } catch (err) {
    next(err);
  }
};

const getReceiptById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const receipt = await findReceiptById(id);
    res.status(200).json(receipt);
  } catch (err) {
    next(err);
  }
};

const createReceipt = async (req, res, next) => {
  try {
    const obj = req.body;
    const sendRecpitData = {
      address : req.body.address,
      user : req.user._id
    }
    const result = await createOneReceipt(obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const updateReceipt = async (req, res, next) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await updateOneReceipt(id, obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const deleteReceipt = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteOneReceipt(id);
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
