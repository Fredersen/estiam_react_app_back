const Product = require('../models/productModel');
const Category = require('../models/categoryModel');

exports.createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

exports.getProducts = async (req, res) => {
    try {
        const categorySlug = req.query.category;
        let products;

        if (categorySlug) {
            const category = await Category.findOne({ slug: categorySlug });

            if (!category) {
                return res.status(404).json({ success: false, message: "Category not found" });
            }

            products = await Product.find({ category: category._id });
        } else {
            products = await Product.find();
        }
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json({ success: true, data: product });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            res.status(404).json({success: false, message: 'Product not found'});
        } else {
            res.status(200).json({success: true, data: product});
        }
    } catch (error) {
        res.status(400).json({success: false, message: error.message});
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            res.status(404).json({success: false, message: 'Product not found'});
        } else {
            res.status(200).json({success: true, message: 'Product deleted'});
        }
    } catch (error) {
        res.status(400).json({success: false, message: error.message});
    }
}

