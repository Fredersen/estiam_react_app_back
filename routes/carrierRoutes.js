const express = require('express');
const carrierController = require('../controllers/carrierController');

const router = express.Router();

router.post('/', carrierController.createCarrier);
router.get('/', carrierController.getCarriers);
router.get('/:id', carrierController.getCarrier);
router.put('/:id', carrierController.updateCarrier);
router.delete('/:id', carrierController.deleteCarrier);

module.exports = router;