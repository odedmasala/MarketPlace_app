const storeManagerModel = require("../../models/storemanager/StoreManagerSchema");
const cloudinary = require("../../utils/cludinary");

const findAllStoresManagers = async () => {
  try {
    const storesManagers = await storeManagerModel.find();
    return storesManagers;
  } catch (error) {
    throw error;
  }
};

const findStoreManagerById = async (id) => {
  try {
    const storeManager = await storeManagerModel.findById(id);
    return storeManager;
  } catch (error) {
    throw error;
  }
};

const createOneStoreManager = async (obj) => {
  try {
    const storeManager = new storeManagerModel(obj);
    await storeManager.save();
    return "Created";
  } catch (error) {
    throw error;
  }
};

const updateOneStoreManager = async (id, obj) => {
  try {
    await storeManagerModel.findByIdAndUpdate(id, obj);
    return "Updated";
  } catch (error) {
    throw error;
  }
};

const deleteOneStoreManager = async (id) => {
  try {
    await storeManagerModel.findByIdAndDelete(id);
    return "Deleted";
  } catch (error) {
    throw error;
  }
};
const cloudinaryUpLoud = async (image, folderPata) => {
  const results = await cloudinary.uploader.upload(image, {
    folder: folderPata,
  });
  return results;
};
module.exports = {
  findAllStoresManagers,
  findStoreManagerById,
  createOneStoreManager,
  deleteOneStoreManager,
  updateOneStoreManager,
  cloudinaryUpLoud
};
