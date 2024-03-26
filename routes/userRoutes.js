const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// API's
router.post("/send_mobile_otp", userController.sentOTP);
router.post("/verify-otp", userController.verifyOTP);

module.exports = router;
