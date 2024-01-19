const express = require("express");

const { handleGenerateNewShortURL } = require("../controllers/URL.controller");
const { handleGetAnalytics } = require("../controllers/Analytics.controller");
const { validateShortId } = require("../middleware/shortIdValidator");

const router = express.Router();

// Create Short URL ID
router.post("/", handleGenerateNewShortURL);

// Get Analytics of Short URL by it's ID
router.get("/analytics/:shortId", validateShortId, handleGetAnalytics);

module.exports = router;
