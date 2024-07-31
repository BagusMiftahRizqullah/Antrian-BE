const express = require("express");
const router = express.Router();
const Visitor = require("./Visitor");

router.use("/", Visitor);
module.exports = router;
