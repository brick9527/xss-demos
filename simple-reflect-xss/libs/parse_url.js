const qs = require('querystring');

module.exports = (url) => {
  const [base, ...queryArr] = url.split('?');
  const queryStr = queryArr.join('?');
  const query = qs.parse(queryStr);
  return { base, query };
}