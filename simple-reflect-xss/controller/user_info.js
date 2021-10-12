const getCookie = require('../libs/get_cookie');

module.exports = (req, res) => {
  const userInfo = {
    name: 'zhangsan',
    age: 18,
    uuid: 'zhangs-30e63e0f-ed5a-4360-b3f8-e2b53b11e025',
  };

  if (!req.headers.cookie) {
    res.statusCode = 400;
    return res.end('failed');
  }

  const cookieValue = getCookie(req);

  console.log(`获取cookie: ${cookieValue}`);
  res.end(JSON.stringify(userInfo));
};