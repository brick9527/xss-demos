const getCookie = require('../libs/get_cookie');

module.exports = (req, res) => {
  const cookie = getCookie(req);
  console.log(`cookie = ${cookie}`);
  res.end(cookie);
};