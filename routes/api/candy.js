const express = require('express');
const router = express.Router();
// const request = require("request")

// candy Model
const candy = require("../../model/candy");

// GET ROUTE api/candy
// This route will GET ALL candy from db
// Access: PUBLIC
router.get('/', (req, res) => {
  candy.find()
    .sort("date: -1")
    .then(candy => res.json(candy))
})

module.exports = router;