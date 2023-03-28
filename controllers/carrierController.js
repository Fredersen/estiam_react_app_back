const Carrier = require('../models/carrierModel');

exports.createCarrier = async (req, res) => {
    try {
        const newCarrier = await Carrier.create(req.body);
        res.status(201).json({ success: true, data: newCarrier });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

exports.getCarriers = async (req, res) => {
    try {
        const carriers = await Carrier.find();
        res.status(200).json({ success: true, data: carriers });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

exports.getCarrier = async (req, res) => {
    try {
        const carrier = await Carrier.findById(req.params.id);
        res.status(200).json({ success: true, data: carrier });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

exports.updateCarrier = async (req, res) => {
    try {
        const carrier = await Carrier.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!carrier) {
            res.status(404).json({ success: false, message: 'Carrier not found' });
        } else {
            res.status(200).json({ success: true, data: carrier });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

exports.deleteCarrier = async (req, res) => {
    try {
        const carrier = await Carrier.findByIdAndDelete(req.params.id);
        if (!carrier) {
            res.status(404).json({ success: false, message: 'Carrier not found' });
        } else {
            res.status(200).json({ success: true, message: 'Carrier deleted' });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}