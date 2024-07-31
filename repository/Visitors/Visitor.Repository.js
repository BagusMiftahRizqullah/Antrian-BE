const { Visitors } = require("../../model");

class VisitorRepository {
  async VisitorListRepository(params) {
    let whereClauce = {
      customer_name: params.query.customer_name,
    };
    const response = await Visitors.find();

    if (response.length > 0)
      return {
        status: true,
        response: response,
        messages: "Successfully getting Visitor list",
      };
    return {
      status: false,
      response: null,
      messages: "Unsuccessfully getting Visitor list",
    };
  }
  formatQueueNumber(number) {
    const prefix = "A";
    const numberString = number.toString().padStart(3, "0");
    return `${prefix}${numberString}`;
  }

  async VisitorPostRepository(params) {
    const currentVisitor = await Visitors.find();

    let currentQueueNumber = currentVisitor.length + 1;

    const generateNoantrian = await this.formatQueueNumber(currentQueueNumber);
    const data = {
      ...params,
      no_antrian: generateNoantrian,
    };

    const response = await Visitors.create(data);
    if (response)
      return {
        status: true,
        response: response,
        messages: "Successfully add Visitors",
      };
    return {
      status: false,
      response: null,
      messages: "Unsuccessfully posting Visitors",
    };
  }

  async VisitorGetOneRepository(params) {
    let whereClauce = {
      _id: params.params.id,
    };
    const response = await Visitors.findOne(whereClauce);

    if (response)
      return {
        status: true,
        response: response,
        messages: `Successfully getting Visitor id ${params.params.id} list`,
      };
    return {
      status: false,
      response: null,
      messages: `Unsuccessfully getting Visitor id ${params.params.id} list`,
    };
  }
}

module.exports = new VisitorRepository();
