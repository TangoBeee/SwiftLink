const express = require("express");

const { handleRedirectURLViewer } = require("../controllers/URLRedirect.controller");

const router = express.Router();

// Get original URL of a ShortID.
router.get("/:shortId", handleRedirectURLViewer);

module.exports = router;
