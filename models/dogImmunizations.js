module.exports = function (sequelize, DataTypes) {

  var dogImmunizations = sequelize.define("dogImmunizations", {

    DHPP_6_8_weeks:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 2
        },
    DHPP_9_11_weeks:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 3
        },
    DHPP_12_15_weeks:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 4
        },
    Rabies_12_15_weeks:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 4
        },
    Bordetella_12_15_weeks:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 4
        },
    DHPP__16_weeks:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 5
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
  return dogImmunizations;

};