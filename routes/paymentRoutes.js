const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.post('/create-checkout-session/:orderId', paymentController.handlePayment);

module.exports = router;