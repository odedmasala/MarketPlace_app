const express = require("express");
const router = express.Router();
const {
  createDepartment,
  deleteDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
} = require("../../controllers/department/index");

router.get("/", getAllDepartments);

router.get("/:id", getDepartmentById);

router.post("/", createDepartment);

router.put("/:id", updateDepartment);

router.delete("/:id", deleteDepartment);


module.exports = router