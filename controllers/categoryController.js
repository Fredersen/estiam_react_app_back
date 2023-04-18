const Category = require('../models/categoryModel');

exports.createCategory = async (req, res) => {
    try {
        req.body.slug = req.body.name.toLowerCase().split(' ').join('-');
        const newCategory = await Category.create(req.body);
        res.status(201).json({ success: true, data: newCategory });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({ success: true, data: categories });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

exports.getCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.status(200).json({ success: true, data: category });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

exports.getCategoryBySlug = async (req, res) => {
    try {
        const category = await Category.findOne({ slug: req.params.slug });
        res.status(200).json({ success: true, data: category });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

exports.updateCategory = async (req, res) => {
    try {
        req.body.slug = req.body.name.toLowerCase().split(' ').join('-');
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!category) {
            res.status(404).json({ success: false, message: 'Category not found' });
        } else {
            res.status(200).json({ success: true, data: category });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) {
            res.status(404).json({ success: false, message: 'Category not found' });
        } else {
            res.status(200).json({ success: true, message: 'Category deleted' });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}