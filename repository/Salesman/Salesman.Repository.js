const { Salesmans } = require("../../model");

class SalesmansRepository {
  async SalesmanListRepository(params) {
    const response = await Salesmans.find(params);

    if (response.length > 0)
      return {
        status: true,
        response: response,
        messages: "Successfully getting Salesman list",
      };
    return {
      status: false,
      response: null,
      messages: "Unsuccessfully getting Salesman list",
    };
  }

  async SalesmanPostRepository(params) {
    const response = await Salesmans.create(params);
    if (response)
      return {
        status: true,
        response: response,
        messages: "Successfully add Salesman",
      };
    return {
      status: false,
      response: null,
      messages: "Unsuccessfully posting Salesman",
    };
  }
}

module.exports = new SalesmansRepository();
