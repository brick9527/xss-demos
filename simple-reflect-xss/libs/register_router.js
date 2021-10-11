module.exports = function (method, routePath, handler) {
  if (this.method === method && this.base === routePath) {
    handler(this, this.res);
  }
};