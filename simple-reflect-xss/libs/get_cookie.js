module.exports = (req, cookieKey = 'uid') => {
  if (!req.headers.cookie) {
    return null;
  }
  const cookieGroup = req.headers.cookie.replace(' ', '').split(';');
  const cookieValue = cookieGroup.reduce((total, item) => {
    const [key, value] = item.split('=');
    if (key === cookieKey) {
      total = value;
    }
    return total;
  }, '');
  return cookieValue;
}