"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Dogadjaj, { foreignKey: "adminId" });
    }
  }
  Admin.init(
    {
      adminId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: "adminId",
      },
      email: {
        type: DataTypes.STRING,
      },
      lozinka: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Admin",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Admin;
};
