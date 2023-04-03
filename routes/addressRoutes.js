const express = require('express');
const addressController = require('../controllers/addressController');
const {protect, authorize} = require("../controllers/authController");

const router = express.Router();

router.post('/', protect, authorize('admin', 'user'), addressController.createAddress);
router.get('/', protect, authorize('admin', 'user'), addressController.getAddresses);
router.get('/:id', protect, authorize('admin', 'user'), addressController.getAddress);
router.put('/:id', protect, authorize('admin', 'user'), addressController.updateAddress);
router.delete('/:id', protect, authorize('admin', 'user'), addressController.deleteAddress);

module.exports = router;