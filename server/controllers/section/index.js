const sectionDAL = require("./DAL");

const getAllSections = async (req, res, next) => {
  try {
    const sections = await sectionDAL.getAllSections();
    res.status(200).json(sections);
  } catch (err) {
    next(err);
  }
};

const getSectionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const section = await sectionDAL.getSectionById(id);
    res.status(200).json(section);
  } catch (err) {
    next(err);
  }
};

const createSection = async (req, res, next) => {
  try {
    const obj = req.body;
    const result = await sectionDAL.createSection(obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const updateSection = async (req, res, next) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await sectionDAL.updateSection(id, obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const deleteSection = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await sectionDAL.deleteSection(id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllSections,
  getSectionById,
  createSection,
  updateSection,
  deleteSection,
};