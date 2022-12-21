const {
  createSection,
  deleteSection,
  getAllSections,
  getSectionById,
  updateSection,
} = require("./DAL");

const getAllSections = async (req, res, next) => {
  try {
    const sections = await getAllSections();
    res.status(200).json(sections);
  } catch (err) {
    next(err);
  }
};

const getSectionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const section = await getSectionById(id);
    res.status(200).json(section);
  } catch (err) {
    next(err);
  }
};

const createSection = async (req, res, next) => {
  try {
    const obj = req.body;
    const result = await createSection(obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const updateSection = async (req, res, next) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await updateSection(id, obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const deleteSection = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteSection(id);
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
