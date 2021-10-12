const Koa = require('koa');
const koaCompose = require('koa-compose');
const koaBody = require('koa-body');
const koaStatic = require('koa-static');
const path = require('path');

const router = require('./routes');

const PORT = 3003;

async function main() {
  const app = new Koa({
    proxy: true,
  });

  app.on('error', err => {
    console.error(err);
  });

  app.use(koaCompose([
    koaBody({
      multipart: true,
      formidable: 1024 * 1024 * 1024 * 3, // 3GB
      parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE'],
    }),
    koaStatic(path.join(__dirname, '/public')),
  ]));

  // 注册路由
  app.use(router.routes()).use(router.allowedMethods());


  app.listen(PORT, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`server is running at port ${PORT}`);
  })
}

main();