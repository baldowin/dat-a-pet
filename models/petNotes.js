module.exports = function(sequelize, DataTypes) {
  var petNotes = sequelize.define("petNotes", {
    petId: 
      { type: DataTypes.INTEGER,
        allowNull: false,
      },
    notes:{
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return petNotes;
};