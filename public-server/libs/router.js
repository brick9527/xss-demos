const Router = require('@koa/router');

const router = new Router();
router.post('/api/cookie', (ctx, next) => {
  console.log(ctx.body);
  ctx.body = 'ok';
});

router.get('/api/cookie', (ctx, next) => {
  console.log(`获取用户cookie数据: ${JSON.stringify(ctx.query)}`);
  ctx.body = 'ok';
});

router.get('/api/password', ctx => {
  console.log(`获取用户表单数据: ${JSON.stringify(ctx.query)}`);
  ctx.body = 'ok';
});

module.exports = router;