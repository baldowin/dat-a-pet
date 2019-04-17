var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");
var isOwner = require("../config/middleware/isOwner");

module.exports = function (app) {
  // Get all examples
  app.get("/api/pets", isAuthenticated, isOwner, function (req, res) {
    db.owners.findAll({
      include: [db.pets],
      where: { ownerEmail: req.user.email }
    }).then(function (view) {
      res.json(view);
    });
  });



  ////START OF AUTH APIS//////////////
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json("/dashboard");
  });

  // Auth // Signup - new user creation - 
  app.post("/api/signup", function (req, res) {
    db.users.create({
      email: req.body.email,
      password: req.body.password,
      owner: true
    }).then(function () {
      console.log("create ran");
      db.owners.create({
        ownerEmail: req.body.email,
        ownerName: req.body.name,
        phone: req.body.phone,
        //authorizedAgents: req.body.agents Future functionality
      }).then(function(){ 
      // res.json("success");
        res.redirect(307, "/api/login");
      }).catch(function (err) {
        console.log(err);
        res.json(err);
      });
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    });
  });

  // Auth // Logout
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  app.post("/api/pets", isAuthenticated, isOwner, function (req, res) {
    db.owners.findOne({
      where: {
        ownerEmail: req.user.email,
      }
    }).then(function (view) {
      req.body.ownerOwnerId = view.dataValues.ownerId;

      db.pets.create(req.body).then(function (result) {
        res.json(result);
      });
    });
  });
  app.delete("/api/pets/:id", function(req, res) {
    db.pets.destroy({ where: {petId: req.params.id}}).then(function(result) {
      res.json(result);
    });
  });
  app.put("/api/pets/:id", function(req,res) {
    db.pets.update(req.body,{
      where: {petId: req.params.id}
    }).then(function(result){
      res.json(result);
    });
  });
};