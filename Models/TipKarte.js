"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TipKarte extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Karta, { foreignKey: "tipKarteId" });
    }
  }
  TipKarte.init(
    {
      tipKarteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: "tipKarteId",
      },
      naziv: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "TipKarte",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return TipKarte;
};
