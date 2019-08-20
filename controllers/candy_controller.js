// candy Model
const candy = require("../model/candy");


// GET Reqeust from route api/candy
// get all candies and return as json
exports.index = (req, res) => {
  candy.find()
  .sort("date: -1")
  .then(candy => res.json({
    msg: "Displaying all candy...",
    candy
  }))
}

// DELETE Request from route api/candy/delete/:id
// Deletes a candy from db by id
exports.delete = (req, res) => {
  const id = req.params.id
  candy.findByIdAndDelete({ _id: id })
    .then(candy => res.json({
      msg: "Candy Succesfully Deleted!",
      candy
    }))
    .catch(err => {
      console.log(err)
    })
}


// POST Request route: api/candy/new
// add a new candy to database
exports.newCandy = (req, res) => {
  const newCandy = new Candy({
    name: req.body.name,
    description: req.body.description,
    cost: req.body.cost,
    info: req.body.info,
  })
  newCandy.save()
    .then(
      candy => res.json({
        msg: "Candy Successfully Saved!",
        candy
      })
      .catch(err => {
        console.log(err)
      })
  )

}