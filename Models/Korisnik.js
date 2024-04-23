"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Korisnik extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Karta, { foreignKey: "korisnikId" });
    }
  }
  Korisnik.init(
    {
      korisnikId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: "korisnikId",
      },
      ime: {
        type: DataTypes.STRING,
      },
      prezime: {
        type: DataTypes.STRING,
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
      modelName: "Korisnik",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Korisnik;
};
