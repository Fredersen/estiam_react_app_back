const User = require('../models/userModel');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            res.status(404).json({ success: false, message: 'User not found' });
        } else {
            res.status(200).json({ success: true, data: user });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

exports.deleteUser = async (req, res) => {
   try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            res.status(404).json({ success: false, message: 'User not found' });
        } else {
            res.status(200).json({ success: true, message: 'User deleted' });
        }
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
}

exports.loginCheck = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).json({ success: false, message: 'Email not found' });
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({ success: false, message: 'Incorrect password' });
        }

        const token = generateToken(user);

        res.status(200).json({ success: true, token , user });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

function generateToken(user) {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '3d' });
}
