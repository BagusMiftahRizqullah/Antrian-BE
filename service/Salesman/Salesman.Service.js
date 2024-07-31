const { SalesmanRepository } = require("../../repository");

class SalesmanService {
  async SalesmanListService(params) {
    const explores = await SalesmanRepository.SalesmanListRepository(params);
    console.log("exploresNya", explores);
    if (explores.status === false) return explores;

    return explores;
  }

  async SalesmanPostService(params) {
    const explores = await SalesmanRepository.SalesmanPostRepository(params);
    if (explores.status === false) return explores;

    return explores;
  }
}

module.exports = new SalesmanService();
