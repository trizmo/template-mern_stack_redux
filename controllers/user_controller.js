const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require("jsonwebtoken")

// User Model
const User = require("../model/user");

// POST REQUEST: api/user/register
// Creates/Registers a new user
exports.register = (req, res) => {
  const { email, password } = req.body;

  // IF any fields are missing...
  if (!email || !password) {
    return res.status(400).json({
      msg: "Please enter both email and password to login"
    })
  }

  User.findOne({ email })
    .then(user => {
      // If we find an existing user with same email
      if (user) {
        return res.status(400).json({
          msg: "User already exists. Please log in"
        })
      }

      const newUser = new User({
        email,
        password
      });

      // Hashing Password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            console.log(error)
          }
          newUser.password = hash

          // Saving new user in db
          newUser.save()
            .then(user => {
              jwt.sign(
                { id: user.id },
                config.get("jwtSecret"),
                { expiresIn: 900 },
                (err, token) => {
                  if (err) {
                    console.log(err)
                  }
                  res.status(200).json({
                    msg: "New user succesfully created",
                    token,
                    user
                  })

                }
              )
            })
        })
      })
    })
}


// POST REQUEST
// Logs user in
exports.login = (req, res) => {
  const { email, password } = req.body;

  // IF any fields are missing...
  if (!email || !password) {
    return res.status(400).json({
      msg: "Please enter both email and password to login"
    })
  }

  User.findOne({ email })
    .then(user => {
      // If we find an existing user with same email
      if (!user) {
        return res.status(400).json({
          msg: "User does not exist"
        })
      }


      // Comparing Hash passwords
      bcrypt.compare(password, user.password)
        .then(isMatch => { //.compare returns a boolean
          if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" })
          // If passwords match, jwt sign and create token
          jwt.sign(
            { id: user.id },
            config.get("jwtSecret"),
            { expiresIn: 900 },
            (err, token) => {
              if (err) {
                console.log(err)
              }
              res.status(200).json({
                // res.status(200).json({
                msg: "Login successful, user authenticated",
                token,
                user
              })

            }
          )

        })

    })

}


// GET REQUEST
// Gets the current user
exports.currentUser = (req, res) => {
  const id = req.auth.user.id
  User.findById({ _id: id })
    .select("-password")
    .then(user => res.status(200).json({
      msg: "User succesfully retreived",
      user
    }))
    .catch(err => res.status(400).json({
      msg: "Cannot find user",
      err
    }))
}