const express = require("express");
const router = express.Router();
const { VisitorController } = require("../../app/");

router.get("/list", VisitorController.VisitorListController);
router.get("/list/:id", VisitorController.VisitorGetOneController);
router.post("/list", VisitorController.VisitorPostController);
module.exports = router;
