const {
  findAllStoresManagers,
  findStoreManagerById,
  createOneStoreManager,
  deleteOneStoreManager,
  updateOneStoreManager,
  cloudinaryUpLoud
} = require("./DAL");


const getAllStoresManagers = async (req, res, next) => {
  try {
    
    const storesManagers = await findAllStoresManagers();
    
    res.status(200).json(storesManagers);
  } catch (err) {
    next(err);
  }
};

const getStoreManagerById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const storeManager = await findStoreManagerById(id);
    res.status(200).json(storeManager);
  } catch (err) {
    next(err);
  }
};

const createStoreManager = async (req, res, next) => {
  try {
    const data = req.body;
    // const logo = data.image;
    // const results = await cloudinaryUpLoud(logo, "storeManager");
    // data.logo = {
    //   url: results.secure_url,
    //   public_id: results.public_id,
    // };
    const result = await createOneStoreManager(data);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const updateStoreManager = async (req, res, next) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await updateOneStoreManager(id, obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const deleteStoreManager = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteOneStoreManager(id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllStoresManagers,
  getStoreManagerById,
  createStoreManager,
  updateStoreManager,
  deleteStoreManager,
};
