const db = require("../Models");
const bcrypt = require("bcrypt");

exports.getAll = async (req, res, next) => {
  try {
    const admins = await db.Admin.findAll();
    res.json(admins);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
exports.login = async (req, res, next) => {
  try {
    const admin = await db.Admin.findOne({
      where: {
        email: req.body.email,
        lozinka: req.body.lozinka,
      },
    });
    res.json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
// exports.login = async (req, res, next) => {
//   try {
//     const admin = await db.Admin.findOne({
//       where: {
//         email: req.body.email,
//         // lozinka: req.body.lozinka,
//       },
//     });
//     if (admin == null) {
//       res.json(admin);
//       return;
//     }
//     const result = await bcrypt.compare(req.body.lozinka, admin.lozinka);
//     if (result) res.json(admin);
//     else res.json(null);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// };
exports.getById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const admin = await db.Admin.findByPk(id);
    if (!admin) return res.status(404).send("Admin not found");
    res.json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
