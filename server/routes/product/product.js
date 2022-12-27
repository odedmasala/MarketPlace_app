const {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} = require("../../controllers/product/index");
const productRoute = require("express").Router();

productRoute.get("/", getAllProducts);
productRoute.get("/:id", getProductById);
productRoute.post("/", createProduct);
productRoute.put("/:id", updateProduct);
productRoute.delete("/:id", deleteProduct);

module.exports = productRoute;
