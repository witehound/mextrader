const path = require("path");
const fs = require("fs");
const { getAllEtfs } = require("./api.js");

const formatData = async () => {
  let newEtfs = {};
  try {
    const { data } = await getAllEtfs();
    for (let etf of data) {
      const { symbol, netValue } = etf;
      newEtfs[symbol] = {
        symbol,
        netValue,
      };
    }
  } catch (error) {}

  return newEtfs;
};

const updatePriceFile = async () => {
  let loc = path.join(__dirname, `../data/pairs.json`);
  const newPriceList = await formatData();
  fs.writeFileSync(loc, JSON.stringify(newPriceList, null, 2));
};

const compareLatestPriceList = async () => {
  const newPriceList = await formatData();
};

module.exports = {
  updatePriceFile,
};
