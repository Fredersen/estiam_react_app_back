const express = require('express');
const carrierController = require('../controllers/carrierController');
const {protect, authorize} = require("../controllers/authController");

const router = express.Router();

router.post('/', protect, authorize('admin'), carrierController.createCarrier);
router.get('/', carrierController.getCarriers);
router.get('/:id', carrierController.getCarrier);
router.put('/:id', protect, authorize('admin'), carrierController.updateCarrier);
router.delete('/:id', protect, authorize('admin'), carrierController.deleteCarrier);

module.exports = router;