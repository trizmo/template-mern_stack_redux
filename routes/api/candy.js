const express = require('express');
const router = express.Router();
// const request = require("request")

// Controllers
const candy_controller = require("../../controllers/candy_controller")

// GET ROUTE api/candy
// This route will GET ALL candy from db
// Access: PUBLIC
router.get('/', candy_controller.index)

// POST ROUTE api/candy/new
// This will add a new candy to db
// Access: PUBLIC
router.post('/new', candy_controller.newCandy)

module.exports = router;