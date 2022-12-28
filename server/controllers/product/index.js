const {
  createOneProduct,
  deleteOneProduct,
  findAllProducts,
  findProductById,
  updateOneProduct,
  cloudinaryUpLoud,
  findProductsByStoreId,
  findProductsBySectionId
} = require("./DAL");


const getAllProducts = async (req, res, next) => {
  try {;
    let products = []
    if(req.query.storeId){
      let storeId = req.query.storeId;
      products = await findProductsByStoreId(storeId);
    }else if(req.query.sectionId){
      let sectionId = req.query.sectionId;
      products = await findProductsBySectionId(sectionId);
    }else{
      products = await findAllProducts();
    }
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await findProductById(id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const data = req.body;
    const image = data.image;
    const results = await cloudinaryUpLoud(image, "product");
    data.image = {
      url: results.secure_url,
      public_id: results.public_id,
    };
    const result = await createOneProduct(data);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await updateOneProduct(id, obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteOneProduct(id);
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
