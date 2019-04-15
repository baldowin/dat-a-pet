require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

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
//   // Create a new pet
// var testHarnessPet1 = {
//   petName: "Evil",
//   imageURL: " ",
//   birthMonth: 06,
//   birthYear: 66,
//   petType: "Dog",
//   petSubtype: "Weiner",
//   gender: "A-gendered Demon",
//   neutered: true,
//   ownerId: 1,
//   medicalHistory:  "chronic possessions"
// };
// db.pets.create(testHarnessPet1, function(result){
//   console.log("successfully created: " +result);
// });
// var testHarnessPet2 = {
//   petName: "Floyd",
//   imageURL: " ", 
//   birthMonth: 01,
//   birthYear: 18,
//   petType: "Cat", 
//   petSubtype: "Cheshire", 
//   gender: "Male",
//   neutered: false,
//   ownerId: 2,
//   medicalHistory: "suffers long boughts of disappearing"
// };
// db.pets.create(testHarnessPet2, function(result){
//   console.log("successfully created: " +result);
// });

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
