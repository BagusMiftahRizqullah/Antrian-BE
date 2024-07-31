const express = require("express");
const router = express.Router();
const { SalesmanController } = require("../../app/");

router.get("/list", SalesmanController.SalesmanListController);
router.post("/list", SalesmanController.SalesmanPostController);

module.exports = router;
