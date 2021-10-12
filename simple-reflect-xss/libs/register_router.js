module.exports = async function (method, routePath, handler) {
  if (this.method === method && this.base === routePath) {
    await handler(this, this.res);
  }
};