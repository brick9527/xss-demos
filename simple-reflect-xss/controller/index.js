const path = require('path');
const fs = require('fs');
const { v4: uuid } = require('uuid');

module.exports = (req, res) => {
  const readStream = fs.createReadStream(path.join(__dirname, '../pages/index.html'));
  res.setHeader('set-cookie', [`uid=${uuid()}`]);
  readStream.pipe(res);
};