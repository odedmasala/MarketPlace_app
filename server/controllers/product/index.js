const productDAL = require("./DAL");
const cludinary = require("../../utils/cludinary");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await productDAL.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productDAL.getProductById(id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const data = req.body;
    const image = data.image;
    const results = await cludinary.uploader.upload(image, {
      folder: "product",
    });
    data.image = {
      url: results.secure_url,
      public_id: results.public_id,
    };
    const result = await productDAL.createProduct(data);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await productDAL.updateProduct(id, obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await productDAL.deleteProduct(id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};