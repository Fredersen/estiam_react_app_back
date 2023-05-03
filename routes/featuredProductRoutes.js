const express = require('express');
const featuredProductController = require('../controllers/featuredProductController');
const {protect, authorize} = require("../controllers/authController");

const router = express.Router();

router.post('/', protect, authorize('admin'), featuredProductController.createFeaturedProduct);
router.get('/', featuredProductController.getFeaturedProducts);
router.get('/:id', featuredProductController.getFeaturedProduct);
router.put('/:id', protect, authorize('admin'), featuredProductController.updateFeaturedProduct);
router.delete('/:id', protect, authorize('admin'), featuredProductController.deleteFeaturedProduct);
router.patch('/remove-product/:id/:productId', protect, authorize('admin'), featuredProductController.removeProductFromFeaturedProduct);
router.patch('/add-product/:id/:productId', protect, authorize('admin'), featuredProductController.addProductToFeaturedProduct);

module.exports = router;