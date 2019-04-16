var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  // Get all examples
  app.get("/api/pets", function (req, res) {
    db.pets.findAll({
      where: {
        petId: 1
        //HARDCODED PETID !!!!!!!!!
      }
    }).then(function (view) {
      res.json(view);
    });
  });




  ////START OF AUTH APIS//////////////
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  // So we're sending the user back the route to the members page because the redirect will happen on the front end
  // They won't get this or even be able to access this page if they aren't authed
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