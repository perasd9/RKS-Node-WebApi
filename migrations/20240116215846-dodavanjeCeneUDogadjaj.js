"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Dogadjaj", "cena", {
      type: Sequelize.DOUBLE,
      allowNull: false,
    });
    await queryInterface.renameColumn("Karta", "cena", "brojKomada");

    await queryInterface.changeColumn("Karta", "brojKomada", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Dogadjaj", "cena");
    await queryInterface.renameColumn("Karta", "brojKomada", "cena");
    await queryInterface.changeColumn("Karta", "cena", {
      type: Sequelize.DOUBLE,
      allowNull: false,
    });
  },
};
