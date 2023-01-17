const { getTime } = require("./utils/timer.js");
const { getAllEtfs } = require("./utils/api.js");
const { getPriceFile, updatePriceFile } = require("./utils/writeData.js");

const main = async () => {
  const data = getPriceFile();
  await updatePriceFile(data, {});
};

main();
