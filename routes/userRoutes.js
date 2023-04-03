const express = require('express');
const userController = require('../controllers/userController');
const {protect, authorize} = require("../controllers/authController");

const router = express.Router();

router.post('/', userController.createUser);
router.post('/login_check', userController.loginCheck);
router.get('/', protect, authorize('user', 'admin'), userController.getUsers);
router.get('/:id', protect, authorize('user', 'admin'), userController.getUser);
router.put('/:id', protect, authorize('user', 'admin'), userController.updateUser);
router.delete('/:id', protect, authorize('admin'), userController.deleteUser);


module.exports = router;
