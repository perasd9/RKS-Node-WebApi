const express = require("express");
const router = express.Router();
const tipKarteController = require("../controllers/tipKarteController");

router.get("/tipKarte", tipKarteController.getAll);
router.get("/tipKarte/:id", tipKarteController.getById);

module.exports = router;
