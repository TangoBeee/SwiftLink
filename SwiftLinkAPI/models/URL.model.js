const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    urlAnalytics: [
      {
        timestamp: { type: Number },
        visitorsInfo: {
          ip: { type: String },
          country: { type: String },
          region: { type: String },
          city: { type: String },
          timezone: { type: String },
        },
      },
    ],
  },
  { timestamp: true }
);

const urlModel = mongoose.model("url", urlSchema);

module.exports = urlModel;
