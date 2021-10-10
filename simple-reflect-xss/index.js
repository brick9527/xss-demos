const http = require('http');

const parseUrl = require('./libs/parse_url');
const helloController = require('./controller/hello');

const PORT = 3001;

const server = http.createServer((req, res) => {

  const { base, query } = parseUrl(req.url);
  req.base = base;
  req.query = query;

  // GET /hello
  if (req.method === 'GET' && req.base === '/hello') {
    helloController(req, res);
  }
});

server.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`server is running at port ${PORT}`);
})