module.exports = function(sequelize, DataTypes) {
    var petNotes = sequelize.define("petNotes", {
      petId: 
      { type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
        },
      notes:{
        type: DataTypes.VARCHAR,
        allowNull: false
      }
    });
    return pets;
  };