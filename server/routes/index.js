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
const receiptRoute = require("./receipt/receipt");
const otpRoute = require("./otp/otp")

router.use("/api/auth", authRoute);
router.use("/api/department", departmentRoute);
router.use("/api/products", productRoute);
router.use("/api/receipt", receiptRoute);
router.use("/api/section", sectionRoute);
router.use("/api/store", storeRoute);
router.use("/api/storeManager", storeManagerRoute);
router.use("api/user", userRoute);
router.use("/api/stripe", stripe);
router.use("/api/test", testRoute);
router.use("/api/otp",otpRoute)

module.exports = router;
