const express = require('express');
const orderDetailController = require('../controllers/orderDetailController');
const {protect, authorize} = require("../controllers/authController");

const router = express.Router();

router.post('/', protect, authorize('admin', 'user'), orderDetailController.createOrderDetail);
router.get('/', protect, authorize('admin', 'user'), orderDetailController.getOrderDetails);
router.get('/:id', protect, authorize('admin', 'user'), orderDetailController.getOrderDetail);
router.get('/order/:id', protect, authorize('admin', 'user'), orderDetailController.getOrderDetailByOrderId);
router.put('/:id', protect, authorize('admin'), orderDetailController.updateOrderDetail);
router.delete('/:id', protect, authorize('admin'), orderDetailController.deleteOrderDetail);

module.exports = router;