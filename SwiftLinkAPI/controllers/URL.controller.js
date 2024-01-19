const { nanoid } = require("nanoid");

const httpStatusCodes = require("../constants/httpStatusCodes");
const urlModel = require("../models/URL.model");

// Regex for validating an URL.
const urlRegex = new RegExp(
  "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
    "(\\#[-a-z\\d_]*)?$",
  "i"
);

const handleGenerateNewShortURL = async (req, res) => {
  const { url } = req.body;

  // Check if URL is empty.
  if (!url) {
    return res.status(httpStatusCodes.BAD_REQUEST).send({
      error: "URL is required!",
      ok: false,
    });
  }

  // Validate the URL.
  if (!urlRegex.test(url)) {
    return res.status(httpStatusCodes.BAD_REQUEST).send({
      error: "URL is not valid!",
      ok: false,
    });
  }

  // Create an unique ShortID for the URL.
  const shortId = nanoid(process.env.SHORT_ID_LEN);

  // Upload the URL data inside MongoDB.
  await urlModel.create({
    shortId: shortId,
    redirectURL: url,
    urlAnalytics: [],
  });

  // Send ShortId with an OK status.
  return res.status(httpStatusCodes.OK).send({
    id: shortId,
    ok: true,
  });
};

module.exports = {
  handleGenerateNewShortURL,
};
