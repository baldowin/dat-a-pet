var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  // Get all examples
  app.get("/api/pets", function (req, res) {
    db.owners.findAll({
      include: [db.pets],
      where: {ownerEmail: req.user.email}
    }).then(function (view) {
      res.json(view);
    });
  });



  ////START OF AUTH APIS//////////////
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/dashboard");
  });

  // Auth // Signup - new user creation - 
  app.post("/api/signup", function(req, res){
    db.users.create({
      email: req.body.email,
      password: req.body.password,
      owner: true
    }).then(function() {
      console.log("create ran");
      // res.json("success");
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

  // Auth // Logout
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.post("/api/pets", function(req, res) {
    db.pets.create(req.body).then(function(result) {
      res.json(result);
    });
  });

//   // Delete an example by id
//   app.delete("/api/pet/:id", function(req, res) {
//     db.pets.destroy({ where: { id: req.params.id } }).then(function(result) {
//       res.json(result);
//     });
//   });
// };
};