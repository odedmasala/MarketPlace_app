const {getStoreById,updateStore,getAllStores,createStore,deleteStore} = require("../../controllers/store/index");

const router = require("express").Router()

router.get("/",getAllStores)
router.post("/",createStore)
router.get("/:id",getStoreById)
router.put("/:id",updateStore)
router.delete("/:id",deleteStore)

module.exports = router;
