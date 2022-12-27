const sectionModel = require("../../models/section/SectionSchema");

const findAllSections = async () => {
  try {
    const sections = await sectionModel
      .find()
    return sections;
  } catch (error) {
    throw error;
  }
};
const findSectionsByStoreId = async (storeId) => {
  try {
    const sectionsInStore = await sectionModel.find({"store": storeId});
    return sectionsInStore
  } catch (error) {
    throw error;
  }
};

const findSectionById = async (id) => {
  try {
    const section = await sectionModel
      .findById(id)
    return section;
  } catch (error) {
    throw error;
  }
};

const createOneSection = async (obj) => {
  try {
    const section = new sectionModel(obj);
    await section.save();
    return "Created";
  } catch (error) {
    throw error;
  }
};

const updateOneSection = async (id, obj) => {
  try {
    await sectionModel.findByIdAndUpdate(id, obj);
    return "Updated";
  } catch (error) {
    throw error;
  }
};

const deleteOneSection = async (id) => {
  try {
    await sectionModel.findByIdAndDelete(id);
    return "Deleted";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findAllSections,
  findSectionById,
  createOneSection,
  deleteOneSection,
  updateOneSection,
  findSectionsByStoreId
};
