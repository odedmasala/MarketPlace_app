const storeModel = require("../../models/store/StoreSchema");
const cloudinary = require("../../utils/cludinary");

const findAllStores = async () => {
  try {
    const stores = await storeModel.find();
    return stores;
  } catch (error) {
    throw error;
  }
};

const findStoresByDepartmentId = async (departmentId) => {
  try {
    const storesInDepartment = await storeModel.find({"department": departmentId});
    return storesInDepartment
  } catch (error) {
    throw error;
  }
};

const findStoreById = async (id) => {
  try {
    const store = await storeModel.findById(id);
    return store;
  } catch (error) {
    throw error;
  }
};

const createOneStore = async (obj) => {
  try {
    const store = new storeModel(obj);
    await store.save();
    return "Created";
  } catch (error) {
    throw error;
  }
};

const updateOneStore = async (id, obj) => {
  try {
    await storeModel.findByIdAndUpdate(id, obj);
    return "Updated";
  } catch (error) {
    throw error;
  }
};

const deleteOneStore = async (id) => {
  try {
    await storeModel.findByIdAndDelete(id);
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
  findAllStores,
  findStoreById,
  createOneStore,
  deleteOneStore,
  updateOneStore,
  cloudinaryUpLoud,
  findStoresByDepartmentId,
};
