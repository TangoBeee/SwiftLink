const httpStatusCodes = require("../constants/httpStatusCodes");
const urlModel = require("../models/URL.model");
const { convertTimestamp } = require("../utils/unixTimestampConverter");

const handleGetAnalytics = async (req, res) => {
  const shortId = req.params.shortId;
  const urlResult = await urlModel.findOne({ shortId });

  // Send 400 status code if urlResult is null.
  if (!urlResult)
    return res.status(httpStatusCodes.BAD_REQUEST).send({
      error: "ShortID is not valid!",
      ok: false,
    });

  // Get the analytics of the provided shortId.
  const urlAnalytics = urlResult.urlAnalytics;

  // Convert the timestamps from unix timestamps to the Date and Time format.
  const formattedTimestamp = urlAnalytics.map((click) => ({
    timestamp: convertTimestamp(click.timestamp),
    visitorsInfo: click.visitorsInfo,
  }));

  // Send the analytics with an OK status.
  return res.status(httpStatusCodes.OK).send({
    analytics: {
      totalClicks: urlAnalytics.length,

      clicksTimeStamp: formattedTimestamp,
    },
    ok: true,
  });
};

module.exports = {
  handleGetAnalytics,
};
