const {createUser,deleteUser,getAllUsers,getUserById,updateUser,cloudinaryUpLoud} = require("./DAL");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userDAL.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userDAL.getUserById(id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    const obj = req.body;
    const result = await userDAL.createUser(obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await userDAL.updateUser(id, obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await userDAL.deleteUser(id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
