const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    civility: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

const Address = mongoose.model('Address', AddressSchema);

module.exports = Address;