module.exports = function(sequelize, DataTypes) {
  var petNotes = sequelize.define("petNotes", {
    notes:{
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  petNotes.associate = function(models) {
    petNotes.belongsTo(models.pets, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return petNotes;
};