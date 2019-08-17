const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");


// Setting port
const port = process.env.PORT || 5000;

// Start Express Instance
const app = express();

// Body parsing middleware
app.use(express.json());

// Set DB URI info (contains pass and login)
const db = config.get('mongoURI');

// Connect to database
mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("Connected to MongoDB mLabs"))
  .catch(err => console.log(err));

// Routing Config
app.use('/api/candy', require('./routes/api/candy'))


// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static("client/build"))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

// Start Node server and listen on port
app.listen(port, () => console.log("Node Server started on port: " + port))