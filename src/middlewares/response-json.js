const responseJson = (_, res, next) => {
  res.success = (data = null, message = "", meta = null, statusCode = 200) => {
    const response = {
      status: "success",
      data,
    };

    if (message) {
      response.message = message;
    }

    if (meta) {
      response.meta = meta;
    }

    res.status(statusCode).json(response);
  };

  res.error = (message = "Lỗi", errors = null, statusCode = 400) => {
    const response = {
      status: "error",
      message,
    };

    if (errors) {
      response.errors;
    }

    return res.status(statusCode).json(response);
  };

  next();
};

module.exports = responseJson;
