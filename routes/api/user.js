const express = require("express");
const router = express.Router();

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



module.exports = router;