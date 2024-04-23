"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dogadjaj extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Admin, { foreignKey: "adminId" });
      this.hasMany(models.Karta, { foreignKey: "dogadjajId" });
    }
  }
  Dogadjaj.init(
    {
      dogadjajId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: "dogadjajId",
      },
      naziv: {
        type: DataTypes.STRING,
      },
      cena: {
        type: DataTypes.DOUBLE,
      },
      tipDogadjaja: {
        type: DataTypes.STRING,
      },
      adminId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Admin", key: "adminId" },
      },
      putanjaSlike: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Dogadjaj",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Dogadjaj;
};
