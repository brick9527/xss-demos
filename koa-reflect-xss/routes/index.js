const Router = require('@koa/router');
const fs = require('fs');
const path = require('path');

const userRouter = require('./user');
const pageRouter = require('./page');

const router = new Router();

router.get('/', ctx => {
  const indexPage = fs.readFileSync(path.join(__dirname, '../pages/index.html'));
  ctx.type = "html";
  ctx.body = indexPage;
});
pageRouter(router);
userRouter(router);

module.exports = router;