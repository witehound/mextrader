const { getTime } = require("./utils/timer.js");
const {
  updatePriceFile,
  compareLatestPriceList,
} = require("./utils/writeData.js");
const { reblanceUtcTime, timeOut } = require("./constants.js");

const main = () => {
  const findOpp = () => {
    console.log("rounds");
    const time = getTime();
    if (time === reblanceUtcTime) {
      updatePriceFile();
    }
    compareLatestPriceList();
  };
  findOpp();
  setInterval(findOpp, timeOut);
};

main();
