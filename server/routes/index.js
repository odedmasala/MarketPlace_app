const router = require("express").Router();
const authRoute = require("./auth/auth");
const departmentRoute = require("./department/department");
const productRoute = require("./product/product");
const sectionRoute = require("./section/section");
const storeRoute = require("./store/store");
const storeManagerRoute = require("./storeManager/storeManager");
const userRoute = require("./user/user");
const testRoute = require("./test/test");
const stripe = require("./stripe/stripe");

router.use("/api/auth", authRoute);
router.use("/api/department", departmentRoute);
router.use("/api/products", productRoute);
// app.use("api/receipt", receiptRoute);
router.use("/api/section", sectionRoute);
router.use("/api/store", storeRoute);
// app.use("api/storeManager", storeManagerRoute);
// app.use("api/user", userRoute);
router.use("/api/stripe", stripe);
router.use("/api/test", testRoute);

module.exports = router;
