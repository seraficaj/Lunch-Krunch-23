const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

/* GET users listing. */
router.get("/", userController.index);

module.exports = router;
