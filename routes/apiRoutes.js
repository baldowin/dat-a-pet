var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.pets.findAll({
      where: {
        petId : 1
        //HARDCODED OWNERID !!!!!!!!!
      }
    }).then(function(view) {
      res.json(view);
    });
  });

//   // Create a new pet
//   app.post("/api/examples", function(req, res) {
//     db.pets.create(req.body).then(function(result) {
//       res.json(dbExample);
//     })
//   });

//   // Delete an example by id
//   app.delete("/api/pet/:id", function(req, res) {
//     db.pets.destroy({ where: { id: req.params.id } }).then(function(result) {
//       res.json(result);
//     });
//   });
// };
