const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/admin", adminController.getAll);
router.get("/admin/:id", adminController.getById);
router.post("/admin-login", adminController.login);

module.exports = router;
