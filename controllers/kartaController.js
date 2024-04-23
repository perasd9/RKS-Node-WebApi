const db = require("../Models");
const { addToTicketQueue } = require("../middlewares/queue");

exports.getAll = async (req, res, next) => {
  try {
    const karte = await db.Karta.findAll();
    res.json(karte);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
exports.getById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const karta = await db.Karta.findByPk(id);
    if (!karta) return res.status(404).send("Karta not found");
    res.json(karta);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
exports.add = async (req, res, next) => {
  try {
    await addToTicketQueue(req.body);
    res
      .status(202)
      .json({ message: "Ticket purchase request added to the queue" });

    // const newKarta = await db.Karta.create(req.body);
    // res.status(201).json(newKarta);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
exports.update = async (req, res, next) => {
  const kartaId = req.params.id;
  try {
    const karta = await db.Karta.findByPk(kartaId);
    if (!karta) {
      return res.status(404).send("Karta not found");
    }
    karta.cena = req.body.cena;
    karta.opis = req.body.opis;
    karta.dogadjajId = req.body.dogadjajId;
    karta.tipKarteId = req.body.tipKarteId;
    karta.korisnikId = req.body.korisnikId;
    await karta.save();
    res.json(karta);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
exports.delete = async (req, res, next) => {
  const kartaId = req.params.id;
  try {
    const karta = await db.Karta.findByPk(kartaId);
    if (!karta) {
      return res.status(404).send("Karta not found");
    }
    await karta.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
