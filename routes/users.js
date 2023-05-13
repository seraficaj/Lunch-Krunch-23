const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

/* GET users listing. */
router.post("/", userController.createUser);
router.get("/", userController.index);

module.exports = router;
