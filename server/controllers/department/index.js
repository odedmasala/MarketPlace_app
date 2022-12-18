const departmentDAL = require("./DAL");
const cludinary = require("../../utils/cludinary");

const getAllDepartments = async (req, res, next) => {
  try {
    const departments = await departmentDAL.getAllDepartments();
    res.status(200).json(departments);
  } catch (err) {
    next(err);
  }
};

const getDepartmentById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const department = await departmentDAL.getDepartmentById(id);
    res.status(200).json(department);
  } catch (err) {
    next(err);
  }
};

const createDepartment = async (req, res, next) => {
  try {
    const { image } = req.body;
    const results = await cludinary.uploader.upload(image, {
      folder: "department",
    });
    const obj = {
      image: results.secure_url,
    };
    const result = await departmentDAL.createDepartment(obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const updateDepartment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await departmentDAL.updateDepartment(id, obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const deleteDepartment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await departmentDAL.deleteDepartment(id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};
