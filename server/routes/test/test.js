const { testAPI } = require("../../controllers/test/test");
const router = require("express").Router();

router.get("/", testAPI);

module.exports = router