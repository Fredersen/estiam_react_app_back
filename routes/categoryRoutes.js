const express = require('express');
const categoryController = require('../controllers/categoryController');
const {protect, authorize} = require("../controllers/authController");

const router = express.Router();

router.post('/', protect, authorize('admin'), categoryController.createCategory);
router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.getCategory);
router.get('/slug/:slug', categoryController.getCategoryBySlug);
router.put('/:id', protect, authorize('admin'), categoryController.updateCategory);
router.delete('/:id', protect, authorize('admin'), categoryController.deleteCategory);

module.exports = router;