const httpStatusCodes = require("../constants/httpStatusCodes");

const validateShortId = (req, res, next) => {
  const shortId = req.params.shortId;

  // Check if shortId is null.
  if (!shortId) {
    return res.status(httpStatusCodes.BAD_REQUEST).send({
      error: "ShortID is required!",
      ok: false,
    });
  }

  // Check if shortId is of length 8. (Because we create shortIDs only 8 digits long)
  if (shortId.length !== 8) {
    return res.status(httpStatusCodes.BAD_REQUEST).send({
      error: "ShortID is not valid!",
      ok: false,
    });
  }

  // Otherwise we'll just call next middleware.
  next();
};

module.exports = {
  validateShortId,
};
