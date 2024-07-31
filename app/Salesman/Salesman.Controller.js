const {
  SalesmanService: { SalesmanListService, SalesmanPostService },
} = require("../../service");

class SalesmanController {
  async SalesmanListController(req, res) {
    const params = req.body;
    const salesman = await SalesmanListService(params);

    return res.json(salesman);
  }

  async SalesmanPostController(req, res) {
    const params = req.body;
    console.log("MYBODYS", params);
    const salesman = await SalesmanPostService(params);
    return res.json(salesman);
  }
}

module.exports = new SalesmanController();
