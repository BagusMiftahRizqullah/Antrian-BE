const {
  VisitorService: {
    VisitorListService,
    VisitorPostService,
    VisitorGetOneService,
  },
} = require("../../service");

class VisitorController {
  async VisitorListController(req, res) {
    const params = req;
    const salesman = await VisitorListService(params);

    return res.json(salesman);
  }

  async VisitorGetOneController(req, res) {
    const params = req;
    const salesman = await VisitorGetOneService(params);

    return res.json(salesman);
  }

  async VisitorPostController(req, res) {
    const params = req.body;
    console.log("MYBODYS", params);
    const salesman = await VisitorPostService(params);
    return res.json(salesman);
  }
}

module.exports = new VisitorController();
