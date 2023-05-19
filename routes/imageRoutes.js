const cloudinary = require('cloudinary').v2;
const express = require('express');
const {protect, authorize} = require("../controllers/authController");
require('dotenv').config();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const fs = require('fs');
const path = require('path');


// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const router = express.Router();

router.post('/upload', protect, authorize('admin'), upload.single('image'), async (req, res) => {
    const tmpFilePath = path.join(__dirname, req.file.originalname);

    fs.writeFileSync(tmpFilePath, req.file.buffer);

    try {
        const result = await cloudinary.uploader.upload(tmpFilePath);
        fs.unlinkSync(tmpFilePath);
        res.status(200).json({ success: true, url: result.secure_url });
    } catch (error) {
        fs.unlinkSync(tmpFilePath);
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;
