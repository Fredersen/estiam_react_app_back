const Carousel = require('../models/carouselModel');

exports.createCarousel = async (req, res) => {
    try {
        const newCarousel = await Carousel.create(req.body);
        res.status(201).json({ success: true, data: newCarousel });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

exports.getCarousels = async (req, res) => {
    try {
        const carousels = await Carousel.find();
        res.status(200).json({ success: true, data: carousels });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

exports.getCarousel = async (req, res) => {
    try {
        const carousel = await Carousel.findById(req.params.id);
        res.status(200).json({ success: true, data: carousel });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

exports.updateCarousel = async (req, res) => {
    try {
        const carousel = await Carousel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!carousel) {
            res.status(404).json({ success: false, message: 'Carousel not found' });
        } else {
            res.status(200).json({ success: true, data: carousel });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

exports.deleteCarousel = async (req, res) => {
    try {
        const carousel = await Carousel.findByIdAndDelete(req.params.id);
        if (!carousel) {
            res.status(404).json({ success: false, message: 'Carousel not found' });
        } else {
            res.status(200).json({ success: true, message: 'Carousel deleted' });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}