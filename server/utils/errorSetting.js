const createError = (status, message) => {
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
  };

const handleError = (err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "something wrong";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  };


  module.exports = {handleError,createError};