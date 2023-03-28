const mongoose = require('mongoose');

const OrderDetailSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
});

const OrderDetail = mongoose.model('OrderDetail', OrderDetailSchema);

module.exports = OrderDetail;