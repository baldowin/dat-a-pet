module.exports = function (sequelize, DataTypes) {
  var pets = sequelize.define("pets", {
    petId:
    {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    petName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageURL: {
      type: DataTypes.STRING
    },
    birthMonth: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    birthYear:
    {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    petType:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    petSubtype:
    {
      type: DataTypes.STRING,
    },
    gender:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    neutered:
    {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    ownerId:
    {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    medicalHistory:
    {
      type: DataTypes.TEXT,
    }
  });
  pets.associate = function (models) {
    pets.hasMany(models.petNotes, {
      onDelete: "cascade"
    });
  };
  return pets;

};