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
  
  app.get("/api/pets/immunizations/:petType/:id", isAuthenticated, isOwner, function(req, res){
    switch(req.params.petType){
    case "dog":
      db.dogImmunizations.findOne({
        where: {
          petPetId: req.params.id
        }
      }).then(function(view){
        res.json(view);
      });
      break;
    case "cat":
      db.catImmunizations.findOne({
        where: {
          petPetId: req.params.id
        }
      }).then(function(view){
        res.json(view);
      });
      break;
    }
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
      res.json(err);
    });
  });

  // Auth // Logout
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  app.post("/api/pets", function (req, res) {
    db.owners.findOne({
      where: {
        ownerEmail: "unique@email.com"
        // req.user.email,
      }
    }).then(function (view) {
      req.body.ownerOwnerId = view.dataValues.ownerId;
      //view.dataValues.ownerId
      db.pets.create(req.body).then(function (result) {
        result.dataValues.immunizations = "";
        function immunizations(result, callback){
          switch(result.dataValues.petType){
          case "dog":
            db.dogImmunizations.create({
              petPetId: result.dataValues.petId
            }).then(function(res){
              result.dataValues.immunizations += JSON.stringify(res.dataValues);
              callback(result);
            });
            break;
          case "cat":
            db.catImmunizations.create({
              petPetId: result.dataValues.petId
            }).then(function(res){
              result.dataValues.immunizations += JSON.stringify(res.dataValues);
              callback(result);
            });
            break;
          }
        }
        function endThen(result) {
          res.json("/dashboard");
        }
        immunizations(result, endThen);
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
    });
  });
};