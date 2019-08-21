const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth")

// CONTROLLERS
const user_controller = require("../../controllers/user_controller")

// POST ROUTE api/user/register
// This route will create/register a new user
// Access: PUBLIC
router.post("/register", user_controller.register)

// POST ROUTE api/user/login
// This route will login a user
// Access: PUBLIC
router.post("/login", user_controller.login)

// GET ROUTE api/user/current
// This route will get the currnt user
// Access: PUBLIC
router.post("/current", auth, user_controller.currentUser)



module.exports = router;