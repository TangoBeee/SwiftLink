const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const requestIp = require('request-ip');

const urlRouter = require("./routes/URL.route");
const urlRedirectRouter = require("./routes/RedirectURLViewer.route");
const dbConnect = require("./utils/dbConnect");
const httpStatusCodes = require("./constants/httpStatusCodes");

dotenv.config();
const app = express();

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

// Trust the hops in the X-Forwarded-For header
// app.set("trust proxy", true);

// Using requestIp lib to get IP from behind the proxy
app.use(requestIp.mw())

// Create Short URL ID
app.use("/url", urlRouter);

// Find and Redirect to Original URL
app.use("/", urlRedirectRouter);

// Show an error if user trying to access a resource that doesn't exist.
app.use((req, res) => {
  res.status(httpStatusCodes.NOT_FOUND).send({
    error: "The resource you are trying to access doesn't exist.",
    ok: false,
  });
});

// Start the server only when we have a valid db connection
dbConnect()
  .then(() => {
    try {
      app.listen(process.env.PORT || 3001, () =>
        console.log(`Server started at PORT: ${process.env.PORT || 3001}`)
      );
    } catch (error) {
      console.log(error.message);
    }
  })
  .catch((error) => {
    console.log(error.message);
  });
