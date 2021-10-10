const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
  const { query } = req;
  const { name } = query;
  
  const headerFilePath = path.join(__dirname, '../pages/header.html');
  const headerContent = fs.readFileSync(headerFilePath, { encoding: 'utf-8' });

  const footerFilePath = path.join(__dirname, '../pages/footer.html');
  const footerContent = fs.readFileSync(footerFilePath, { encoding: 'utf-8' });

  res.end(`${headerContent} ${name} ${footerContent}`);
};