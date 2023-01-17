const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema(
  {
    Symbol: {
      type: String,
      required: true,
    },

    netValue: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pricee", priceSchema);
