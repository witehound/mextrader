const path = require("path");
const fs = require("fs");
const { getAllEtfs } = require("./api.js");

const getOldPriceList = () => {
  let list = path.join(__dirname, `../data/price.json`);
  return JSON.parse(fs.readFileSync(list, "utf-8"));
};

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
  let loc = path.join(__dirname, `../data/price.json`);
  const newPriceList = await formatData();
  fs.writeFileSync(loc, JSON.stringify(newPriceList, null, 2));
};

const updatePriceDifference = async (diff) => {
  let loc = path.join(__dirname, `../data/priceDifference.json`);
  fs.writeFileSync(loc, JSON.stringify(diff, null, 2));
};

const compareLatestPriceList = async () => {
  const newPriceList = await formatData();
  const oldPriceList = getOldPriceList();

  let diff = {};

  for (let key in oldPriceList) {
    let oldPrice = oldPriceList[key].netValue;
    let newPrice = newPriceList[key].netValue;
    if (oldPrice < newPrice) {
      let percentage = ((newPrice - oldPrice) / oldPrice) * 100;
      diff[key] = {
        percentage,
        direction: "up",
      };
    } else if (oldPrice > newPrice) {
      let percentage = ((oldPrice - newPrice) / oldPrice) * 100;
      diff[key] = {
        percentage,
        direction: "down",
      };
    }
  }
  updatePriceDifference(diff);
};

module.exports = {
  updatePriceFile,
  compareLatestPriceList,
};
