const { VisitorRepository } = require("../../repository");

class VisitorService {
  async VisitorListService(params) {
    const explores = await VisitorRepository.VisitorListRepository(params);

    if (explores.status === false) return explores;

    return explores;
  }

  async VisitorGetOneService(params) {
    const explores = await VisitorRepository.VisitorGetOneRepository(params);

    if (explores.status === false) return explores;

    return explores;
  }

  async VisitorPostService(params) {
    const explores = await VisitorRepository.VisitorPostRepository(params);
    if (explores.status === false) return explores;

    return explores;
  }
}

module.exports = new VisitorService();
