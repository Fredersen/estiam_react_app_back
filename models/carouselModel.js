const mongoose = require('mongoose');

const carouselSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Carousel', carouselSchema);

