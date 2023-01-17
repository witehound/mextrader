const path = require("path");
const fs = require("fs");

const getPriceFile = () => {
  return path.join(__dirname, `../data/pairs.json`);
};

const updatePriceFile = (loc, newPrice) => {
  fs.writeFileSync(loc, JSON.stringify(newPrice, null, 2));
};

module.exports = {
  getPriceFile,
  updatePriceFile,
};
