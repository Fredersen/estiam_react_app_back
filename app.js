const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const featuredProductRoutes = require('./routes/featuredProductRoutes');
const carrierRoutes = require('./routes/carrierRoutes');
const addressRoutes = require('./routes/addressRoutes');
const orderRoutes = require('./routes/orderRoutes');
const orderDetailRoutes = require('./routes/orderDetailRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const carouselRoutes = require('./routes/carouselRoutes');
const imageRoutes = require('./routes/imageRoutes');
const bodyParser = require("body-parser");

const cors = require('cors');

require('dotenv').config();

const hostname = process.env.HOST_NAME;
const port = process.env.PORT;
const mongodbURI = process.env.MONGODB_URI;

const app = express();

// CORS configuration
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect(mongodbURI, {
    useNewUrlParser: true,
    dbName: 'react_ecommerce_back'
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/featured-products', featuredProductRoutes);
app.use('/api/carriers', carrierRoutes);
app.use('/api/address', addressRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/order-details', orderDetailRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/carousel', carouselRoutes);
app.use('/api/v1/images', imageRoutes);

// Server
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
