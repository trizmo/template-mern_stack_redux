const express = require('express');
const router = express.Router();

// Route Authorization
const auth = require("../../middleware/auth")

// CONTROLLERS
const candy_controller = require("../../controllers/candy_controller")

// GET ROUTE api/candy
// This route will GET ALL candy from db
// Access: PRIVTE: AUTHORIZATION REQUIRED
router.get('/', auth, candy_controller.index)

// POST ROUTE api/candy/new
// This will add a new candy to db
// Access: PUBLIC
router.post('/new', candy_controller.newCandy)

module.exports = router;