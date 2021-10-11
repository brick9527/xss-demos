const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
  console.log(req.base);
  const readStream = fs.createReadStream(path.join(__dirname, '../', req.base));
  readStream.pipe(res);
};
