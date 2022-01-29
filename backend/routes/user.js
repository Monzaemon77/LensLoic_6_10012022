const express = require("express");
const router = express.Router();

const passwordCtrl = require("../middleware/passwordCtrl");
const userCtrl = require("../controllers/user");

router.post("/signup", passwordCtrl, userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
