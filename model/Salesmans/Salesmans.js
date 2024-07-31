const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SalesmansSchema = new Schema(
  {
    salesman_name: {
      type: String,
      required: false,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Salesmans = mongoose.model("salesmans", SalesmansSchema);
module.exports = Salesmans;
