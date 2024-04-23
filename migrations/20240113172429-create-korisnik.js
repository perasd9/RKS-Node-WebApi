"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Korisnik", {
      korisnikId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ime: {
        type: Sequelize.STRING,
      },
      prezime: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      lozinka: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Korisnik");
  },
};
