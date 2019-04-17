module.exports = function (sequelize, DataTypes) {

  var dogImmunizations = sequelize.define("dogImmunizations", {

    DHPP_2_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
        },
    DHPP_3_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
        },
    DHPP_4_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
        },
    Rabies_4_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
        },
    Bordetella_4_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
        },
    DHPP_5_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
        },
    DHPP_Booster:
        {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "00;00"
        },
    Bordetella_Booster:
        {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "00;00"
        },
    Rabies_Booster:
        {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "00;00"
        },
  });
  dogImmunizations.associate = function(models) {
    dogImmunizations.belongsTo(models.pets, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return dogImmunizations;

};