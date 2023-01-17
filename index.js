const { getTime } = require("./utils/timer.js");
const {
  updatePriceFile,
  compareLatestPriceList,
} = require("./utils/writeData.js");
const {
  reblanceUtcHour,
  timeOut,
  reblanceUtcLimit,
} = require("./constants.js");

const main = () => {
  const findOpp = () => {
    console.log("rounds");
    const { hour, minute } = getTime();
    if (hour === reblanceUtcHour && minute < reblanceUtcLimit) {
      updatePriceFile();
    }
    compareLatestPriceList();
  };
  findOpp();
  setInterval(findOpp, timeOut);
};

main();
