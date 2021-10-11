const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
  const readStream = fs.createReadStream(path.join(__dirname, '../pages/index.html'));
  res.setHeader('set-cookie', ['uid=1233333']);
  readStream.pipe(res);
};