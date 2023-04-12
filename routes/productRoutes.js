const express = require('express');
const productController = require('../controllers/productController');
const {protect, authorize} = require("../controllers/authController");
const multer = require("multer");

const upload = multer();

const router = express.Router();

router.post("/", protect, authorize("admin"), upload.none(), productController.createProduct);
router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);
router.put('/:id', protect, authorize('admin'), upload.none(), productController.updateProduct);
router.delete('/:id', protect, authorize('admin'), productController.deleteProduct);

module.exports = router;