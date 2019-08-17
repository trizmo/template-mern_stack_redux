module.exports = function(app){

  // ROUTING FOR CONTROLLERS
  var candy = require("./api/candy");
  
  // API ROUTES
  app.use('/api/candy', candy);

}