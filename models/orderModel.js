const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    carrierName: {
        type: String,
        required: true
    },
    carrierPrice: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
    orderDetails: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderDetail',
        required: false
    }],
    stripeSessionId: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: true
    },
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;