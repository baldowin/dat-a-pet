var db = require("../models");
// var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");
var isOwner = require("../config/middleware/isOwner");

///Helper Functions//
function nextFunction(context) {
  return ["../views/dashboardTemplate.handlebars", context];
}



function immunizationCall(petObject, context, callback) {
  if (pets.dataValues.petType === "cat") {
    db.catImmunizations.findOne(
      {
        where:
        {
          petPetId: pets.dataValues.petId
        }
      }).then(function (view) {
        petObject.immunization = view;
      });
  } else {
    db.dogImmunizations.findOne({
      where: { petPetId: pets.dataValues.petId }
    }).then(function (view) {
      petObject.immunization = view;
    });
  }
  petObject.petInfo = pets.dataValues;
  context.pets.push(petObject);
  return callback(context);
};



module.exports = function (app) {
  // Load index page
  app.get("/newPet", isAuthenticated, isOwner, function (req, res) {
    var context = {};
    context.owner = req.user;
    res.render("../views/dashboardNewPet.handlebars", context);
  });
  app.get("/dashboard", isAuthenticated, isOwner, function (req, res) {
    var context = {
      owner: "",
      pets: []
    };
    db.owners.findOne({
      where: {
        ownerEmail: req.user.email
      }
    }).then(function (view) {
      context.owner = view.dataValues.ownerName;
      db.pets.findAll({
        where: { ownerOwnerId: view.dataValues.ownerId }
      }).then(function (view) {
        view.forEach(function (pets) {

          var petObject = {};
          var array = immunizationCall(petObject, context, nextFunction);
          console.log(array);
          res.render(array[0], array[1]);
        }
      });
    });

  });


  app.get("/login", function (req, res) {
    if (req.user) {
      res.redirect("/dashboard");
    } else {
      // res.render("login");
      res.render("../views/login.handlebars");
    }
  });
  app.get("/signup", function (req, res) {
    // res.render("signup");
    res.render("../views/signup.handlebars");
  });
  app.get("/", function (req, res) {
    res.render("index");
  });
  app.get("/aboutus", function (req, res) {
    res.render("../views/aboutus.handlebars");
  });
  app.get("/services", function (req, res) {
    res.render("../views/services.handlebars");
  });
  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};