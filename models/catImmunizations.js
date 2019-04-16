module.exports = function (sequelize, DataTypes) {

  var catImmunizations = sequelize.define("catImmunizations", {

    FVRCP_6_8_Weeks:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 2
        },
    FVRCP_9_11_Weeks:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 3
        },
    FELV_9_11_Weeks:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 3
        },
    FVRCP__16_Weeks:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 5
        },
    FELV__16_Weeks:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 4
        },
    RABIES__16_Weeks:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 4
        },
    FVRCP_Booster:
        {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "00;00"
        },
    FELV_Booster:
        {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "00;00"
        }
  });
  return catImmunizations;

};