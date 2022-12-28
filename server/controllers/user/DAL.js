const userModel = require("../../models/user/UserSchema");
const cloudinary = require("../../utils/cludinary");

const findAllUsers = async () => {
  try {
    const users = await userModel.find();
    return users;
  } catch (error) {
    throw error;
  }
};

const findOneUser = async (obj) =>{
  try {
    const users = await userModel.findOne(obj);
    return users;
  } catch (error) {
    throw error;
  }

}

const findUserById = async (id) => {
  try {
    const user = await userModel.findById(id);
    return user;
  } catch (error) {
    throw error;
  }
};

const createOneUser = async (obj) => {
  try {
    const user = new userModel(obj);
    await user.save();
    return "Created";
  } catch (error) {
    throw error;
  }
};

const updateOneUser = async (id, obj) => {
  try {
    await userModel.findByIdAndUpdate(id, obj);
    return "Updated";
  } catch (error) {
    throw error;
  }
};

const deleteOneUser = async (id) => {
  try {
    await userModel.findByIdAndDelete(id);
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
  findAllUsers,
  findOneUser,
  findUserById,
  createOneUser,
  updateOneUser,
  deleteOneUser,
  cloudinaryUpLoud
};
