const Order = require('../models/orderModel');

exports.createOrder = async (req, res) => {
    try {
        const newOrder = await Order.create(req.body);
        res.status(201).json({ success: true, data: newOrder });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('address').populate('orderDetails').populate({path: 'orderDetails', populate: {path: 'product'}}).exec();
        res.status(200).json({ success: true, data: orders });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

exports.getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('address').populate('orderDetails').populate({path: 'orderDetails', populate: {path: 'product'}}).exec();
        res.status(200).json({ success: true, data: order });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}


exports.getOrderByServiceId = async (req, res) => {
    try {
        const order = await Order.find({ stripeSessionId: req.params.id })
            .populate('address').populate({
                path: 'orderDetails',
                populate: {
                    path: 'product'
                }
            }).exec();
        res.status(200).json({ success: true, data: order });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

exports.getOrderByUserId = async (req, res) => {
    try {
        const order = await Order.find({ user: req.params.id })
            .populate('address').populate({
                path: 'orderDetails',
                populate: {
                    path: 'product'
                }
            }).exec();
        res.status(200).json({ success: true, data: order });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

exports.updateOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!order) {
            res.status(404).json({ success: false, message: 'Order not found' });
        } else {
            res.status(200).json({ success: true, data: order });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

exports.deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) {
            res.status(404).json({ success: false, message: 'Order not found' });
        } else {
            res.status(200).json({ success: true, message: 'Order deleted' });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}


