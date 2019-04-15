module.exports = function(sequelize, DataTypes) {
  var pets = sequelize.define("pets", {
    petId: 
    { type: DataTypes.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true},
    petName:{
      type: DataTypes.VARCHAR,
      allowNull: false
    },
    imageURL: {
      type: DataTypes.VARCHAR
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
      type: DataTypes.VARCHAR,
      allowNull: false
    },
    petSubtype:
    {
      type: DataTypes.VARCHAR,
    },
    gender:
    {
      type: DataTypes.VARCHAR,
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
  return pets;
};

pets.associate = function(models){
  pets.hasMany(models.petNotes, {
    onDelete: "cascade"
  });
};