const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userController.createUser);
router.post('/login_check', userController.loginCheck);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);


module.exports = router;