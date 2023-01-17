const getTime = () => {
  const time = new Date().getUTCHours();
  return time;
};

module.exports = {
  getTime,
};
