const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creat Schema
const CandySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  cost: {
    type: String,
    required: true
  },
  alertStyle: {
    type: [],
    required: false
  }
});

module.exports = Candy = mongoose.model("Candy", CandySchema);