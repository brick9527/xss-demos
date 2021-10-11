module.exports = (req, res) => {
  const userInfo = {
    name: 'zhangsan',
    age: 18
  };

  if (!req.headers.cookie) {
    res.statusCode = 400;
    return res.end('failed');
  }

  const cookieGroup = req.headers.cookie.replace(' ', '').split(';');
  const cookieValue = cookieGroup.reduce((total, item) => {
    const [key, value] = item.split('=');
    if (key === 'uid') {
      total = value;
    }
    return total;
  }, '');

  console.log(`获取cookie: ${cookieValue}`);
  res.end(JSON.stringify(userInfo));
};