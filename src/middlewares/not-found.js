const notFoundHandler = (req, res) => {
  return res.error(`Cannot ${req.method} ${req.url}`, null, 404);
};

module.exports = notFoundHandler;
