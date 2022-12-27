const {
  createOneSection,
  deleteOneSection,
  findAllSections,
  findSectionById,
  updateOneSection,
  findSectionsByStoreId
} = require("./DAL");

const getAllSections = async (req, res, next) => {
  try {
    let sections = [];
    if (req.query.storeId) {
      let storeId = req.query.storeId;
      sections = await findSectionsByStoreId(storeId);
    } else {
      sections = await findAllSections();
    }
    res.status(200).json(sections);
  } catch (err) {
    next(err);
  }
};

const getSectionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const section = await findSectionById(id);
    res.status(200).json(section);
  } catch (err) {
    next(err);
  }
};

const createSection = async (req, res, next) => {
  try {
    const obj = req.body;
    const result = await createOneSection(obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const updateSection = async (req, res, next) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await updateOneSection(id, obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const deleteSection = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteOneSection(id);
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
