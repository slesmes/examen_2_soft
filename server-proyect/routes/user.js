const userController = require("../controllers/user")
const express = require("express");
const md_auth = require("../middlewares/authenticatedValidation")

const router = express.Router();
// http://localhost:3100/api/v1/users/new-user
router.post('/new-user', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserByid);
router.put('/:id', userController.updateUserByid);
router.patch('/:id', userController.updateUserByid);
router.delete('/:id', userController.deleteUserByid);
module.exports = router;