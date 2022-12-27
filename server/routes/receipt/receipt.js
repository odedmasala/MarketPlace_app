const {
  getAllReceipts,
  getReceiptById,
  createReceipt,
  updateReceipt,
  deleteReceipt,
} = require("../../controllers/receipt");
const receiptRoute = require("express").Router();

receiptRoute.get("/", getAllReceipts);
receiptRoute.get("/:id", getReceiptById);
receiptRoute.post("/", createReceipt);
receiptRoute.put("/:id", updateReceipt);
receiptRoute.delete("/:id", deleteReceipt);

module.exports = receiptRoute;
