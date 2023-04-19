const express = require('express');
const carouselController = require('../controllers/carouselController');
const {protect, authorize} = require("../controllers/authController");
const multer = require("multer");

const upload = multer();

const router = express.Router();

router.post("/", protect, authorize("admin"), upload.none(), carouselController.createCarousel);
router.get('/', carouselController.getCarousels);
router.get('/:id', carouselController.getCarousel);
router.put('/:id', protect, authorize('admin'), upload.none(), carouselController.updateCarousel);
router.delete('/:id', protect, authorize('admin'), carouselController.deleteCarousel);

module.exports = router;