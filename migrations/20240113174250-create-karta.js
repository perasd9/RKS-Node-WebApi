"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Karta", {
      kartaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      cena: {
        type: Sequelize.DOUBLE,
      },
      opis: {
        type: Sequelize.STRING,
      },
      dogadjajId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Dogadjaj", key: "dogadjajId" },
      },
      tipKarteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "TipKarte", key: "tipKarteId" },
      },
      korisnikId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Korisnik", key: "korisnikId" },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Karta");
  },
};
