/* eslint-disable camelcase */
require("dotenv").config();
var express = require("express");
var session = require("express-session");
var exphbs = require("express-handlebars");
var passport = require("./config/passport");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({ secret: "jamesCat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}else{
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
  //seed database with a new user
  db.users.create({
    email: "unique@email.com",
    password: "TEST",
    owner: true
  }).then(function () {
    db.owners.bulkCreate([{
      ownerName: "Tucker",
      ownerEmail: "unique@email.com",
      phone: 5558675309,
      authorizedAgents: "Dale",
      createdAt: new Date(),
      updatedAt: new Date()
    }]).then(function (view) {
      db.pets.bulkCreate([
        {
          petName: "Evil",
          imageURL: " ",
          birthMonth: 06,
          birthYear: 66,
          petType: "Dog",
          petSubtype: "Weiner",
          gender: "A-gendered Demon",
          neutered: true,
          ownerOwnerId: view[0].dataValues.ownerId,
          medicalHistory: "chronic possessions",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          petName: "Floyd",
          imageURL: " ",
          birthMonth: 01,
          birthYear: 18,
          petType: "Cat",
          petSubtype: "Cheshire",
          gender: "Male",
          neutered: false,
          ownerOwnerId: view[0].dataValues.ownerId,
          medicalHistory: "suffers long boughts of disappearing",
          createdAt: new Date(),
          updatedAt: new Date()
        }]).then(function (view) {
        db.dogImmunizations.create({
          petPetId: view[0].dataValues.petId
        });
        db.catImmunizations.create({
          petPetId: view[1].dataValues.petId,
          FVRCP_2_months: true
        });
      });
    });
  });
});


module.exports = app;
