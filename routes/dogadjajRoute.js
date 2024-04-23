const express = require("express");
const router = express.Router();
const dogadjajController = require("../controllers/dogadjajController");
const auth = require("../middlewares/auth");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, path.resolve(__dirname, "../public/images/"));
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

router.get("/dogadjaj", dogadjajController.getAll);
router.get("/dogadjaj/:id", dogadjajController.getById);
router.post(
  "/dogadjaj",
  auth,
  upload.single("putanjaSlike"),
  dogadjajController.add
);
router.put("/dogadjaj/:id", dogadjajController.update);
router.delete("/dogadjaj/:id", dogadjajController.delete);

module.exports = router;
