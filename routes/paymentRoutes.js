const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const {protect, authorize} = require("../controllers/authController");

router.post('/create-checkout-session/:orderId', protect, authorize('admin', 'user'), paymentController.handlePayment);

module.exports = router;