const departmentModel = require("../../models/department/DepartmentSchema");

const getAllDepartments = async () => {
  try {
    const departments = await departmentModel.find();
    return departments;
  } catch (error) {
    throw error;
  }
};

const getDepartmentById = async (id) => {
  try {
    const department = await departmentModel.findById(id);
    return department;
  } catch (error) {
    throw error;
  }
};

const createDepartment = async (obj) => {
  try {
    const department = new departmentModel(obj);
    await department.save();
    return "Created";
  } catch (error) {
    throw error;
  }
};

const updateDepartment = async (id, obj) => {
  try {
    await departmentModel.findByIdAndUpdate(id, obj);
    return "Updated";
  } catch (error) {
    throw error;
  }
};

const deleteDepartment = async (id) => {
  try {
    await departmentModel.findByIdAndDelete(id);
    return "Deleted";
  } catch (error) {
    throw error;
  }
};
const cloudinaryUpLoud = async (image,folderPata)=> {
  const results = await cloudinary.uploader.upload(image, {
    folder: folderPata,
  });
  return results
}
module.exports = {
  getAllDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
  cloudinaryUpLoud
};
