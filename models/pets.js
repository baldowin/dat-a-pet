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
    medicalHistory:
    {
      type: DataTypes.TEXT,
    }
  });
  pets.associate = function (models) {
    pets.belongsTo(models.owners, {
      foreignKey: {
        allowNull: false
      }
    });
    pets.hasMany(models.petNotes, {
      onDelete: "cascade"
    });
    pets.hasOne(models.dogImmunizations, {
      onDelete: "cascade"
    });
    pets.hasOne(models.catImmunizations, {
      onDelete: "cascade"
    });
  };
  return pets;

};