const express = require('express');
const featuredProductController = require('../contollers/featuredProductController');

const router = express.Router();

router.post('/', featuredProductController.createFeaturedProduct);
router.get('/', featuredProductController.getFeaturedProducts);
router.get('/:id', featuredProductController.getFeaturedProduct);
router.put('/:id', featuredProductController.updateFeaturedProduct);
router.delete('/:id', featuredProductController.deleteFeaturedProduct);

module.exports = router;