const geoip = require("geoip-lite");

const httpStatusCodes = require("../constants/httpStatusCodes");
const urlModel = require("../models/URL.model");

const handleRedirectURLViewer = async (req, res) => {
  const paramShortId = req.params.shortId;

  // Check if shortId ends with a "+". Which means user wants to see the original URL.
  const shortId =
    paramShortId.length === 9 && paramShortId.endsWith("+")
      ? paramShortId.substring(0, 8)
      : paramShortId;

  // Get the info of the current visitor for analytics.
  const { country, region, city, timezone } = geoip.lookup(req.ip);

  // Fetch and Update the URL analytics.
  const urlResult = await urlModel.findOneAndUpdate(
    { shortId },
    {
      $push: {
        urlAnalytics: {
          timestamp: Date.now(),

          visitorsInfo: {
            ip: req.ip,
            country: country,
            region: region,
            city: city,
            timezone: timezone,
          },
        },
      },
    }
  );

  // Send 400 status code if urlResult is null.
  if (!urlResult)
    return res.status(httpStatusCodes.BAD_REQUEST).send({
      error: "ShortID is not valid!",
      ok: false,
    });

  // Send the original URL if shortId ends with "+". Otherwise just redirect them to the URL.
  if (paramShortId.endsWith("+")) {
    res.status(httpStatusCodes.OK).send({
      redirectURL: urlResult.redirectURL,
    });
  } else {
    res.status(httpStatusCodes.OK).redirect(urlResult.redirectURL);
  }
};

module.exports = {
  handleRedirectURLViewer,
};
