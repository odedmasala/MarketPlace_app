const express = require('express');
const router = express.Router();
const {
  getAllSections,
  getSectionById,
  createSection,
  updateSection,
  deleteSection,
} = require('../../controllers/section/index');

router.get('/', getAllSections);
router.get('/:id', getSectionById);
router.post('/', createSection);
router.put('/:id', updateSection);
router.delete('/:id', deleteSection);

module.exports = router;
