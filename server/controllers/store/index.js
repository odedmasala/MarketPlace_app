const storeDAL = require("./DAL");

const getAllStores = async (req, res, next) => {
  try {
    const stores = await storeDAL.getAllStores();
    res.status(200).json(stores);
  } catch (err) {
    next(err);
  }
};

const getStoreById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const store = await storeDAL.getStoreById(id);
    res.status(200).json(store);
  } catch (err) {
    next(err);
  }
};

const createStore = async (req, res, next) => {
  try {
    const obj = req.body;
    const result = await storeDAL.createStore(obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const updateStore = async (req, res, next) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await storeDAL.updateStore(id, obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const deleteStore = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await storeDAL.deleteStore(id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllStores,
  getStoreById,
  createStore,
  updateStore,
  deleteStore,
};