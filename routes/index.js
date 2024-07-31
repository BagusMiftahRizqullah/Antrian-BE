const express = require("express");
const router = express.Router();

const Salesman = require("./Salesman");
const Visitor = require("./Visitor");

/* GET home page. */
router.use("/salesman", Salesman);
router.use("/visitor", Visitor);

module.exports = router;
