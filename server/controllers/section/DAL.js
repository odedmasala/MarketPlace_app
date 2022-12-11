const sectionModel = require("../../models/section/SectionSchema");

const getAllSections = async () => {
  try {
    const sections = await sectionModel.find().populate(["storeId","departmentIds"]);
    return sections;
  } catch (error) {
    throw error;
  }
};

const getSectionById = async (id) => {
  try {
    const section = await sectionModel.findById(id).populate(["storeId","departmentIds"]);
    return section;
  } catch (error) {
    throw error;
  }
};

const createSection = async (obj) => {
  try {
    const section = new sectionModel(obj);
    await section.save();
    return "Created";
  } catch (error) {
    throw error;
  }
};

const updateSection = async (id, obj) => {
  try {
    await sectionModel.findByIdAndUpdate(id, obj);
    return "Updated";
  } catch (error) {
    throw error;
  }
};

const deleteSection = async (id) => {
  try {
    await sectionModel.findByIdAndDelete(id);
    return "Deleted";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllSections,
  getSectionById,
  createSection,
  updateSection,
  deleteSection,
};
