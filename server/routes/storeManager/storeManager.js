const {getAllStoresManagers,
    getStoreManagerById,
    createStoreManager,
    updateStoreManager,
    deleteStoreManager,} = require("../../controllers/storeManager/index");

const router = require("express").Router()

router.get("/",getAllStoresManagers)
router.post("/",createStoreManager)
router.get("/:id",getStoreManagerById)
router.put("/:id",updateStoreManager)
router.delete("/:id",deleteStoreManager)

module.exports = router;