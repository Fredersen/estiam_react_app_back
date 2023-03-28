const Address = require('../models/addressModel');

exports.createAddress = async (req, res) => {
    try {
        const newAddress = await Address.create(req.body);
        res.status(201).json({ success: true, data: newAddress });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

exports.getAddresses = async (req, res) => {
    try {
        const addresses = await Address.find();
        res.status(200).json({ success: true, data: addresses });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

exports.getAddress = async (req, res) => {
    try {
        const address = await Address.findById(req.params.id);
        res.status(200).json({ success: true, data: address });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

exports.updateAddress = async (req, res) => {
    try {
        const address = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!address) {
            res.status(404).json({ success: false, message: 'Address not found' });
        } else {
            res.status(200).json({ success: true, data: address });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

exports.deleteAddress = async (req, res) => {
    try {
        const address = await Address.findByIdAndDelete(req.params.id);
        if (!address) {
            res.status(404).json({ success: false, message: 'Address not found' });
        } else {
            res.status(200).json({ success: true, message: 'Address deleted' });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}