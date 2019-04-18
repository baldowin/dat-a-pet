module.exports = function (sequelize, DataTypes) {

  var catImmunizations = sequelize.define("catImmunizations", {

    FVRCP_2_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
        },
    FVRCP_3_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
        },
    FELV_3_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
        },
    FVRCP_4_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
        },
    FELV_4_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
        },
    RABIES_4_months:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: false
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
  catImmunizations.associate = function(models) {
    catImmunizations.belongsTo(models.pets, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return catImmunizations;

};