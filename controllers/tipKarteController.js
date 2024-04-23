const db = require("../Models");

exports.getAll = async (req, res, next) => {
  try {
    const tipoviKarte = await db.TipKarte.findAll();
    res.json(tipoviKarte);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
exports.getById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const tipKarte = await db.TipKarte.findByPk(id);
    if (!tipKarte) return res.status(404).send("TipKarte not found");
    res.json(tipKarte);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
