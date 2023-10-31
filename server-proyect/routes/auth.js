const authController = require("../controllers/auth")
const ensureAuth = require("../middlewares/authenticatedValidation")
const express = require("express");
const router = express.Router();

router.post("/signin", authController.signin);
router.post("/login", authController.login);
router.get("/get-me/:id",ensureAuth, authController.getMe);

module.exports = router;