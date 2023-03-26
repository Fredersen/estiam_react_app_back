const mongoose = require('mongoose');

const FeaturedProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

module.exports = mongoose.model('FeaturedProduct', FeaturedProductSchema);