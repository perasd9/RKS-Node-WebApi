const express = require("express");
const router = express.Router();
const kartaController = require("../controllers/kartaController");
const auth = require("../middlewares/auth");

router.get("/karta", kartaController.getAll);
router.get("/karta/:id", kartaController.getById);
router.post("/karta", auth, kartaController.add);
router.put("/karta/:id", kartaController.update);
router.delete("/karta/:id", kartaController.delete);

module.exports = router;
