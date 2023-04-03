const express = require('express');
const orderController = require('../controllers/orderController');
const {protect, authorize} = require("../controllers/authController");

const router = express.Router();

router.post('/', protect, authorize('admin', 'user'), orderController.createOrder);
router.get('/', protect, authorize('admin', 'user'), orderController.getOrders);
router.get('/:id', protect, authorize('admin', 'user'), orderController.getOrder);
router.get('/service/:id', protect, authorize('admin', 'user'), orderController.getOrderByServiceId);
router.get('/user/:id', protect, authorize('admin', 'user'), orderController.getOrderByUserId);
router.put('/:id', protect, authorize('admin'), orderController.updateOrder);
router.delete('/:id', protect, authorize('admin'), orderController.deleteOrder);

module.exports = router;

