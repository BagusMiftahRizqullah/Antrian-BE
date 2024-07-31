const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const VisitorsSchema = new Schema(
  {
    salesman_id: {
      type: String,
      required: false,
      default: null,
    },
    customer_name: {
      type: String,
      required: false,
      default: null,
    },
    pic: {
      type: String,
      required: false,
      default: null,
    },
    city: {
      type: String,
      required: false,
      default: null,
    },
    remark: {
      type: String,
      required: false,
      default: null,
    },
    npwp: {
      type: String,
      required: false,
      default: null,
    },
    customer_price_category: {
      type: String,
      required: false,
      default: null,
    },
    address: {
      type: String,
      required: false,
      default: null,
    },
    address_2: {
      type: String,
      required: false,
      default: null,
    },
    contact_no: {
      type: String,
      required: false,
      default: null,
    },
    region: {
      type: String,
      required: false,
      default: null,
    },
    province: {
      type: String,
      required: false,
      default: null,
    },
    kouta: {
      type: Number,
      required: false,
      default: null,
    },
    no_antrian: {
      type: String,
      required: false,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Visitors = mongoose.model("visitors", VisitorsSchema);
module.exports = Visitors;
