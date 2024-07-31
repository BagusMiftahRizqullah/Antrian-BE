const express = require("express");
const router = express.Router();
const Salesman = require("./Salesman");

router.use("/", Salesman);
module.exports = router;
