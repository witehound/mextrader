const { getTime } = require("./utils/timer.js");
const {
  updatePriceFile,
  compareLatestPriceList,
} = require("./utils/writeData.js");
const { reblanceUtcTime } = require("./constants.js");

const main = async () => {
  const time = getTime();
  if (time === reblanceUtcTime) {
    updatePriceFile();
  }
  compareLatestPriceList();
};

main();
