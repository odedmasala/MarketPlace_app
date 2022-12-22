const {
  cloudinaryUpLoud,
  createOneStore,
  updateOneStore,
  deleteOneStore,
  findAllStores,
  findStoreById,
  findStoresByDepartmentId,
} = require("./DAL");


const getAllStores = async (req, res, next) => {
  try {
    let stores = [];
    if(req.query.departmentId){
      let departmentId = req.query.departmentId;
      stores = await findStoresByDepartmentId(departmentId)
    }else{
      stores = await findAllStores();
    }
    res.status(200).json(stores);
  } catch (err) {
    next(err);
  }
};

const getStoreById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const store = await findStoreById(id);
    res.status(200).json(store);
  } catch (err) {
    next(err);
  }
};

const createStore = async (req, res, next) => {
  try {
    const data = req.body;
    const logo = data.logo;
    const results = await cloudinaryUpLoud(logo, "store");
    data.logo = {
      url: results.secure_url,
      public_id: results.public_id,
    };
    const result = await createOneStore(data);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const updateStore = async (req, res, next) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await updateOneStore(id, obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const deleteStore = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteOneStore(id);
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
