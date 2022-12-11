const storeModel = require("../../models/store/StoreSchema");

const getAllStores = async () => {
  try {
    const stores = await storeModel.find();
    return stores;
  } catch (error) {
    throw error;
  }
};

const getStoreById = async (id) => {
  try {
    const store = await storeModel.findById(id);
    return store;
  } catch (error) {
    throw error;
  }
};

const createStore = async (obj) => {
  try {
    const store = new storeModel(obj);
    await store.save();
    return "Created";
  } catch (error) {
    throw error;
  }
};

const updateStore = async (id, obj) => {
  try {
    await storeModel.findByIdAndUpdate(id, obj);
    return "Updated";
  } catch (error) {
    throw error;
  }
};

const deleteStore = async (id) => {
  try {
    await storeModel.findByIdAndDelete(id);
    return "Deleted";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllStores,
  getStoreById,
  createStore,
  updateStore,
  deleteStore,
};
