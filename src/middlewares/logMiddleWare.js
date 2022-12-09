const logMiddleWare = (request, response, next) => {
  console.log("Request URL:", request.originalUrl);
  next();
};

module.exports = logMiddleWare;
