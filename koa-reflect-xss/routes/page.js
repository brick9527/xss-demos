const path = require('path');
const fs = require('fs');

module.exports = (router) => {
  router.get('/hello', ctx => {
    const { name } = ctx.query;

    const headerFilePath = path.join(__dirname, '../pages/header.html');
    const headerContent = fs.readFileSync(headerFilePath, { encoding: 'utf-8' });

    const footerFilePath = path.join(__dirname, '../pages/footer.html');
    const footerContent = fs.readFileSync(footerFilePath, { encoding: 'utf-8' });

    ctx.type = 'html';
    ctx.body = `${headerContent} ${name} ${footerContent}`;
  });
};