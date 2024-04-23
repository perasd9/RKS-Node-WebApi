const db = require("../Models");
const NodeCache = require("node-cache");

const doagadjajiKes = new NodeCache({ stdTTL: 10 * 1 });

exports.getAll = async (req, res, next) => {
  try {
    const kesiraniPodaci = doagadjajiKes.get("allEvents");
    if (kesiraniPodaci) {
      return res.json(kesiraniPodaci);
    }
    const dogadjaji = await db.Dogadjaj.findAll({
      include: [
        {
          model: db.Admin,
          as: "Admin",
          attributes: ["adminId", "email"],
        },
      ],
    });
    const mappedDogadjaji = dogadjaji.map((event) => event.toJSON());
    doagadjajiKes.set("allEvents", mappedDogadjaji);
    res.json(dogadjaji);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
exports.getById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const dogadjaj = await db.Dogadjaj.findByPk(id);
    if (!dogadjaj) return res.status(404).send("Dogadjaj not found");
    res.json(dogadjaj);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
exports.add = async (req, res, next) => {
  try {
    req.body.putanjaSlike = "http://127.0.0.1:5000/images/" + req.file.filename;

    const newDogadjaj = await db.Dogadjaj.create(req.body);
    res.status(201).json(newDogadjaj);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
exports.update = async (req, res, next) => {
  const dogadjajId = req.params.id;
  try {
    const dogadjaj = await db.Dogadjaj.findByPk(dogadjajId);
    if (!dogadjaj) {
      return res.status(404).send("Dogadjaj not found");
    }
    dogadjaj.naziv = req.body.naziv;
    dogadjaj.adminId = req.body.adminId;
    dogadjaj.tipDogadjaja = req.body.tipDogadjaja;
    await dogadjaj.save();
    res.json(dogadjaj);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
exports.delete = async (req, res, next) => {
  const dogadjajId = req.params.id;
  try {
    const dogadjaj = await db.Dogadjaj.findByPk(dogadjajId);
    if (!dogadjaj) {
      return res.status(404).send("Dogadjaj not found");
    }
    await dogadjaj.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
