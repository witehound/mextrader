const { ViewModule } = require("@material-ui/icons");
const axios = require("axios");
require("dotenv").config();

const getAllEtfs = async () => {
  const data = await axios.get(process.env.API_URL);
  return data;
};

module.exports = {
  getAllEtfs,
};
