const Product = require('../models/productModel');
const Category = require('../models/categoryModel');
const FeaturedProduct = require('../models/featuredProductModel');

exports.createProduct = async (req, res) => {
    try {
        const { name, description, price, category, image } = req.body;
        const newProduct = await Product.create({
            name,
            description,
            price,
            category,
            image,
        });

        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const categorySlug = req.query.category;
        let products;

        if (categorySlug) {
            const category = await Category.findOne({ slug: categorySlug, isDeleted: false });

            if (!category) {
                return res.status(404).json({ success: false, message: "Category not found" });
            }

            products = await Product.find({ category: category._id });
        } else {
            products = await Product.find({ isDeleted: false });
        }
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id, isDeleted: false });
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
        const deletedProduct = await Product.findByIdAndUpdate(req.params.id, { isDeleted: true }, { new: true });
        if (!deletedProduct) {
            return res.status(404).json({success: false, message: 'Product not found'});
        }

        const featuredProducts = await FeaturedProduct.find({ products: deletedProduct._id });
        console.log(featuredProducts);
        for (const featuredProduct of featuredProducts) {
            featuredProduct.products = featuredProduct.products.filter(productId => productId.toString() !== deletedProduct._id.toString());
            await featuredProduct.save();
        }

        res.status(200).json({success: true, message: 'Product deleted'});
    } catch (error) {
        res.status(400).json({success: false, message: error.message});
    }
}

