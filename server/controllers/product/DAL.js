const productModel = require("../../models/product/ProductSchema");

const getAllProducts = async () => {
  try {
    const products = await productModel.find().populate(["storeId","subCategory"]);
    return products;
  } catch (error) {
    throw error;
  }
};

const getProductById = async (id) => {
  try {
    const product = await productModel.findById(id).populate(["storeId","subCategory"]);
    return product;
  } catch (error) {
    throw error;
  }
};

const createProduct = async (obj) => {
  try {
    const product = new productModel(obj);
    await product.save();
    return "Created";
  } catch (error) {
    throw error;
  }
};

const updateProduct = async (id, obj) => {
  try {
    await productModel.findByIdAndUpdate(id, obj);
    return "Updated";
  } catch (error) {
    throw error;
  }
};

const deleteProduct = async (id) => {
  try {
    await productModel.findByIdAndDelete(id);
    return "Deleted";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
