const Router = require('@koa/router');

const router = new Router();
router.post('/api/password', (ctx, next) => {
  console.log(ctx.body);
  ctx.body = 'ok';
});

router.get('/api/password', (ctx, next) => {
  console.log(ctx.body);
  ctx.body = 'ok';
});

module.exports = router;