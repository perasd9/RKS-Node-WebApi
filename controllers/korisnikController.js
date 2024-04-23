const db = require("../Models");
const bcrypt = require("bcrypt");

exports.getAll = async (req, res, next) => {
  try {
    const korisnici = await db.Korisnik.findAll();
    res.json(korisnici);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
exports.login = async (req, res, next) => {
  try {
    const korisnik = await db.Korisnik.findOne({
      where: {
        email: req.body.email,
        // lozinka: req.body.lozinka,
      },
    });
    if (korisnik == null) {
      res.json(korisnik);
      return;
    }

    const result = await bcrypt.compare(req.body.lozinka, korisnik.lozinka);
    if (result) res.json(korisnik);
    else res.json(null);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
exports.getById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const korisnik = await db.Korisnik.findByPk(id);
    if (!korisnik) return res.status(404).send("Korisnik not found");
    res.json(korisnik);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
exports.add = async (req, res, next) => {
  try {
    const hash = await bcrypt.hash(req.body.lozinka, 10);

    req.body.lozinka = hash;
    const korisnik = await db.Korisnik.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (korisnik !== null) {
      res.json({ message: "User with same email is registered!" });
      return;
    }
    const newKorisnik = await db.Korisnik.create(req.body);
    res.status(201).json(newKorisnik);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
exports.update = async (req, res, next) => {
  const korisnikId = req.params.id;
  try {
    const korisnik = await db.Korisnik.findByPk(korisnikId);
    if (!korisnik) {
      return res.status(404).send("Korisnik not found");
    }
    korisnik.ime = req.body.ime;
    korisnik.prezime = req.body.prezime;
    korisnik.email = req.body.email;
    korisnik.lozinka = req.body.lozinka;
    await korisnik.save();
    res.json(korisnik);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
exports.delete = async (req, res, next) => {
  const korisnikId = req.params.id;
  try {
    const korisnik = await db.Korisnik.findByPk(korisnikId);
    if (!korisnik) {
      return res.status(404).send("Korisnik not found");
    }
    await korisnik.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
