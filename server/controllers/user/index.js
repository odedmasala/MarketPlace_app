const {
  createOneUser,
  deleteOneUser,
  findAllUsers,
  findUserById,
  updateOneUser,
  cloudinaryUpLoud,
} = require("./DAL");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await findAllUsers();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};


const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await findUserById(id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    const obj = req.body;
    const result = await createOneUser(obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await updateOneUser(id, obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteOneUser(id);
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
