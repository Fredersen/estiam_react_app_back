const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const featuredProductRoutes = require('./routes/featuredProductRoutes');
const cors = require('cors');

const hostname = '127.0.0.1';
const port = 3000;
const mongodbURI = 'mongodb://root:example@127.0.0.1:27017';

const app = express();

app.use(cors());

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
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/featured-products', featuredProductRoutes);

// Server
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
