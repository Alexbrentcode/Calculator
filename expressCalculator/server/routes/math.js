const express = require("express");

const { addition, subtraction, multiplication, division } = require("../controllers/math");

const router = express.Router();

router.post("/add", addition);
router.post("/subtract", subtraction);
router.post("/multiply", multiplication);
router.post("/divide", division);


module.exports = router;