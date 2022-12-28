const {
  getUserById,
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
} = require("../../controllers/user/index");
const { verifyUser } = require("../../middleware/verifyToken");
const router = require("express").Router();

router.get("/", verifyUser, getAllUsers);
router.get("/:id", verifyUser, getUserById);
router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);

module.exports = router;
