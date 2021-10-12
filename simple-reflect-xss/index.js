const http = require('http');

const parseUrl = require('./libs/parse_url');
const helloController = require('./controller/hello');
const registerRouter = require('./libs/register_router');
const publicController = require('./controller/public');
const renderIndexPage = require('./controller/index');
const userInfo = require('./controller/user_info');
const login = require('./controller/login');
const checkCookie = require('./controller/check_cookie');

const PORT = 3001;

const server = http.createServer((req, res) => {

  const { base, query } = parseUrl(req.url);
  req.base = base;
  req.query = query;
  req.res = res;
  req.registerRouter = registerRouter;


  console.log(base, query);
  // GET /public
  req.registerRouter('GET', '/public/js/jquery-3.6.0.js', publicController);
  req.registerRouter('GET', '/public/bootstrap/js/bootstrap.min.js', publicController);
  req.registerRouter('GET', '/public/bootstrap/css/bootstrap.min.css', publicController);
  req.registerRouter('GET', '/public/bootstrap/css/bootstrap.min.css.map', publicController);


  // POST /api/login
  req.registerRouter('POST', '/api/login', login);

  // GET /api/info
  req.registerRouter('GET', '/api/info', userInfo);

  // GET /page/checkCookie
  req.registerRouter('GET', '/page/checkCookie', checkCookie);

  // GET /hello
  req.registerRouter('GET', '/hello', helloController);

  // GET /
  req.registerRouter('GET', '/', renderIndexPage);
});

server.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`server is running at port ${PORT}`);
})