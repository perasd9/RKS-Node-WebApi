const express = require("express");
const router = express.Router();
const korisnikController = require("../controllers/korisnikController");

router.get("/korisnik", korisnikController.getAll);
router.get("/korisnik/:id", korisnikController.getById);
router.post("/korisnik-login", korisnikController.login);
router.post("/korisnik", korisnikController.add);
router.put("/korisnik/:id", korisnikController.update);
router.delete("/korisnik/:id", korisnikController.delete);

module.exports = router;
