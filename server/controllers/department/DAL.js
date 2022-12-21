const departmentModel = require("../../models/department/DepartmentSchema");
const cloudinary = require("../../utils/cludinary");

const findAllDepartments = async () => {
  try {
    const departments = await departmentModel.find();
    return departments;
  } catch (error) {
    throw error;
  }
};

const findDepartmentById = async (id) => {
  try {
    const department = await departmentModel.findById(id);
    return department;
  } catch (error) {
    throw error;
  }
};

const createOneDepartment = async (obj) => {
  try {
    const department = new departmentModel(obj);
    await department.save();
    return "Created";
  } catch (error) {
    throw error;
  }
};

const updateOneDepartment = async (id, obj) => {
  try {
    await departmentModel.findByIdAndUpdate(id, obj);
    return "Updated";
  } catch (error) {
    throw error;
  }
};

const deleteOneDepartment = async (id) => {
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
  findAllDepartments,
  findDepartmentById,
  createOneDepartment,
  updateOneDepartment,
  deleteOneDepartment,
  cloudinaryUpLoud
};
