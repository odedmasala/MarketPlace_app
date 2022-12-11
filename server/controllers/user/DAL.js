const userModel = require("../../models/user/UserSchema");

const getAllUsers = async () => {
  try {
    const users = await userModel.find().populate(["storeId","paymentBillInfo"]);;
    return users;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const user = await userModel.findById(id);
    return user;
  } catch (error) {
    throw error;
  }
};

const createUser = async (obj) => {
  try {
    const user = new userModel(obj);
    await user.save();
    return "Created";
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id, obj) => {
  try {
    await userModel.findByIdAndUpdate(id, obj);
    return "Updated";
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    await userModel.findByIdAndDelete(id);
    return "Deleted";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
