module.exports = function (sequelize, DataTypes) {
  var owners = sequelize.define("owners", {
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ownerName: {
      type: DataTypes.STRING,
      allowNull: false
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
    owners.belongsTo(models.users, {
      as: "owners",
      foreignKey: {
        allowNull: false
      }
    });
  };

  owners.associate = function (models) {
    owners.hasMany(models.pets, {
      onDelete: "cascade"
    });
  };
  return owners;
};
