const express = require('express');
const addressController = require('../controllers/addressController');

const router = express.Router();

router.post('/', addressController.createAddress);
router.get('/', addressController.getAddresses);
router.get('/:id', addressController.getAddress);
router.put('/:id', addressController.updateAddress);
router.delete('/:id', addressController.deleteAddress);

module.exports = router;