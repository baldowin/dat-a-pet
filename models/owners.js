module.exports = function (sequelize, DataTypes) {
  var owners = sequelize.define("owners", {
    ownerId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    ownerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.BIGINT
    },
    authorizedAgents:
    {
      type: DataTypes.STRING,
    }
  });

  owners.associate = function (models) {
    owners.hasMany(models.pets, {
      onDelete: "cascade"
    });
  };
  return owners;
};
