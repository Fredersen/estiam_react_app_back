const OrderDetail = require('../models/orderDetailModel');
const Order = require('../models/orderModel');

exports.createOrderDetail = async (req, res) => {
    try {
        const newOrderDetail = await OrderDetail.create(req.body);
        const order = await Order.findById(req.body.order);
        console.log(order);
        order.orderDetails.push(newOrderDetail._id);
        await order.save();
        res.status(201).json({ success: true, data: newOrderDetail });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

exports.getOrderDetails = async (req, res) => {
    try {
        const orderDetails = await OrderDetail.find();
        res.status(200).json({ success: true, data: orderDetails });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

exports.getOrderDetail = async (req, res) => {
    try {
        const orderDetail = await OrderDetail.findById(req.params.id);
        res.status(200).json({ success: true, data: orderDetail });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

exports.getOrderDetailByOrderId = async (req, res) => {
    try {
        const orderDetail = await OrderDetail.find({ order: req.params.id });
        res.status(200).json({ success: true, data: orderDetail });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

exports.updateOrderDetail = async (req, res) => {
    try {
        const orderDetail = await OrderDetail.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!orderDetail) {
            res.status(404).json({ success: false, message: 'OrderDetail not found' });
        } else {
            res.status(200).json({ success: true, data: orderDetail });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

exports.deleteOrderDetail = async (req, res) => {
    try {
        const orderDetail = await OrderDetail.findByIdAndDelete(req.params.id);
        if (!orderDetail) {
            res.status(404).json({ success: false, message: 'OrderDetail not found' });
        } else {
            res.status(200).json({ success: true, message: 'OrderDetail deleted' });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}