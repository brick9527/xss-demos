const users = require('../model/user');
const receiveData = require('../libs/receive_data');

module.exports = async (req, res) => {
  // 接收数据
  const data = await receiveData(req);
  const { username, password } = data;
  if (!username || !password) {
    res.statusCode = 400;
    res.end(JSON.stringify({ status: false, errMsg: 'username or password is null' }));
    return;
  }

  const user = users.filter(item => {
    return item.name === username && item.password === password;
  })
  console.log(user);
  if (!user.length) {
    res.statusCode = 400;
    res.end(JSON.stringify({ status: false, errMsg: 'not found this user' }));
    return;
  }
  // res.removeHeader('Set-Cookie');
  res.setHeader('set-cookie', [`uid=${user[0].uuid}`]);
  res.end(JSON.stringify({ status: true, user: user[0] }));
};