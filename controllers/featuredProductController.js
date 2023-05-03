const FeaturedProduct = require('../models/featuredProductModel');

exports.createFeaturedProduct = async (req, res) => {
    try {
        const newFeaturedProduct = await FeaturedProduct.create(req.body);
        res.status(201).json({ success: true, data: newFeaturedProduct });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

exports.getFeaturedProducts = async (req, res) => {
    try {
        const featuredProducts = await FeaturedProduct.find();
        res.status(200).json({ success: true, data: featuredProducts });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

exports.getFeaturedProduct = async (req, res) => {
    try {
        const featuredProduct = await FeaturedProduct.findById(req.params.id);
        res.status(200).json({ success: true, data: featuredProduct });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

exports.updateFeaturedProduct = async (req, res) => {
    try {
        const featuredProduct = await FeaturedProduct.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!featuredProduct) {
            res.status(404).json({ success: false, message: 'Featured product not found' });
        } else {
            res.status(200).json({ success: true, data: featuredProduct });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

exports.removeProductFromFeaturedProduct = async (req, res) => {
    try {
        const featuredProduct = await FeaturedProduct.findById(req.params.id);

        if (!featuredProduct) {
            res.status(404).json({ success: false, message: 'Featured product not found' });
        } else {
            featuredProduct.products = featuredProduct.products.filter(
                (product) => product.toString() !== req.params.productId
            );

            await featuredProduct.save();

            res.status(200).json({ success: true, data: featuredProduct });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.addProductToFeaturedProduct = async (req, res) => {
    try {
        const featuredProduct = await FeaturedProduct.findById(req.params.id);

        if (!featuredProduct) {
            res.status(404).json({ success: false, message: 'Featured product not found' });
        } else {
            featuredProduct.products.push(req.params.productId);

            await featuredProduct.save();

            res.status(200).json({ success: true, data: featuredProduct });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

exports.deleteFeaturedProduct = async (req, res) => {
    try {
        const featuredProduct = await FeaturedProduct.findByIdAndDelete(req.params.id);
        if (!featuredProduct) {
            res.status(404).json({ success: false, message: 'Featured product not found' });
        } else {
            res.status(200).json({ success: true, message: 'Featured product deleted' });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
