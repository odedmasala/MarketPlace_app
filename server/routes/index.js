const router = require("express").Router();

const importRouterFromAllFolders = {
  // authRoute: require("./auth/auth"),
  departmentRoute: require("./department/department"),
  productRoute: require("./product/product"),
  sectionRoute: require("./section/section"),
  storeRoute: require("./store/store"),
  storeManagerRoute: require("./storeManager/storeManager"),
  userRoute: require("./user/user"),
  testRoute: require("./test/test"),
};

router.use("/api/test", importRouterFromAllFolders.testRoute);
router.use("/api/department", importRouterFromAllFolders.departmentRoute);
router.use("/api/products", importRouterFromAllFolders.productRoute);
// app.use("api/receipt",receiptRoute)
router.use("/api/section", importRouterFromAllFolders.sectionRoute);
router.use("/api/store", importRouterFromAllFolders.storeRoute);
// app.use("api/storeManager",storeManagerRoute)
// app.use("api/user",userRoute)

module.exports = router;
