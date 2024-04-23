"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Karta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Dogadjaj, { foreignKey: "dogadjajId" });
      this.belongsTo(models.Korisnik, { foreignKey: "korisnikId" });
      this.belongsTo(models.TipKarte, { foreignKey: "tipKarteId" });
    }
  }
  Karta.init(
    {
      kartaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: "kartaId",
      },
      brojKomada: {
        type: DataTypes.INTEGER,
      },
      opis: {
        type: DataTypes.STRING,
      },
      dogadjajId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Dogadjaj", key: "dogadjajId" },
      },
      tipKarteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "TipKarte", key: "tipKarteId" },
      },
      korisnikId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Korisnik", key: "korisnikId" },
      },
    },
    {
      sequelize,
      modelName: "Karta",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Karta;
};
