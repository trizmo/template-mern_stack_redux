const express = require('express');
const router = express.Router();

// Route Authorization
const auth = require("../../middleware/auth")

// CONTROLLERS
const candy_controller = require("../../controllers/candy_controller")

// GET ROUTE api/candy
// This route will GET ALL candy from db
// Access: PRIVATE: AUTHORIZATION REQUIRED
router.get('/', auth, candy_controller.index)

// DELETE ROUTE api/candy/delete/:id
// This route will DELETE Candy by id from the db
// Access: PRIVATE: AUTHORIZATION REQUIRED
router.delete('/delete/:id', auth, candy_controller.delete)

// POST ROUTE api/candy/new
// This will add a new candy to db
// Access: PRIVATE: AUTHORIZATION REQUIRED
router.post('/new', auth, candy_controller.newCandy)

module.exports = router;