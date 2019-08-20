module.exports = function(app){
  // API ROUTING FOR CONTROLLERS

  // ## CANDY ROUTES
  const candy = require("./api/candy");
  app.use('/api/candy', candy);
  
  // ## USER ROUTES
  const user = require("./api/user");
  app.use('/api/user', user);
   

}