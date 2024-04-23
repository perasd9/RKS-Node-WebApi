const { Sequelize } = require("sequelize");
const Korisnik = require("../Models/Korisnik");
const Dogadjaj = require("../Models/Dogadjaj");
const Admin = require("../Models/Admin");
const Karta = require("../Models/Karta");
const TipKarte = require("../Models/TipKarte");

const sequelize = new Sequelize("itehseminarski", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: "9090",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = {
  sequelize,
  Korisnik,
  Admin,
  Karta,
  Dogadjaj,
  TipKarte,
};
