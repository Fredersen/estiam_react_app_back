const express = require('express');
const orderDetailController = require('../controllers/orderDetailController');

const router = express.Router();

router.post('/', orderDetailController.createOrderDetail);
router.get('/', orderDetailController.getOrderDetails);
router.get('/:id', orderDetailController.getOrderDetail);
router.get('/order/:id', orderDetailController.getOrderDetailByOrderId);
router.put('/:id', orderDetailController.updateOrderDetail);
router.delete('/:id', orderDetailController.deleteOrderDetail);

module.exports = router;