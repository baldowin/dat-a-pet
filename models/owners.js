module.exports = function (sequelize, DataTypes) {
    var owners = sequelize.define("owners", {
        ownerId:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        ownerName:{
            type: DataTypes.VARCHAR,
            allowNull: false
        },
        email:{
            type: DataTypes.VARCHAR
        },
        phone: {
            type: DataTypes.BIGINT
        },
        authorizedAgents:
        {
            type: DataTypes.VARCHAR,
        }
    });
return owners;
  };


owners.associate = function (models) {
    owners.hasMany(models.pets, {
        onDelete: "cascade"
    });
};