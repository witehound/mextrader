const getTime = () => {
  const hour = new Date().getUTCHours();
  const minute = new Date().getUTCMinutes();
  return {
    hour,
    minute,
  };
};

module.exports = {
  getTime,
};
