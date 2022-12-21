const {
  cloudinaryUpLoud,
  createOneDepartment,
  deleteOneDepartment,
  findAllDepartments,
  findDepartmentById,
  updateOneDepartment,
} = require("./DAL");

const getAllDepartments = async (req, res, next) => {
  try {
    const departments = await findAllDepartments();
    res.status(200).json(departments);
  } catch (err) {
    next(err);
  }
};

const getDepartmentById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const department = await findDepartmentById(id);
    res.status(200).json(department);
  } catch (err) {
    next(err);
  }
};

const createDepartment = async (req, res, next) => {
  try {
    const data = req.body;
    const image = data.image;
    const results = await cloudinaryUpLoud(image, "department");
    data.image = {
      url: results.secure_url,
      public_id: results.public_id,
    };
    const result = await createOneDepartment(data);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const updateDepartment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await updateOneDepartment(id, obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const deleteDepartment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteOneDepartment(id);
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
