const mongoose = require('mongoose');

const carrierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Carrier = mongoose.model('Carrier', carrierSchema);

module.exports = Carrier;