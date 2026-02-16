const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const authenticateUser = require("../middlewares/authorization")

// registering the user
router.post("/register",authController.createUser);
//loging in the user
router.post("/login",authController.loginUser);
// profile route
router.get("/profile",authenticateUser.authenticateUser,authController.getProfile);
// route for changing the password
router.post("/profile/password",authenticateUser.authenticateUser,authController.changePassword);

module.exports = router;