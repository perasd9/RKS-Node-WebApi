"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Dogadjaj", {
      dogadjajId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      naziv: {
        type: Sequelize.STRING,
      },
      adminId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Admin", key: "adminId" },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Dogadjaj");
  },
};
