const express = require('express');
const router = express.Router();
const { handelGenerateNewShortURL, handelGetAnalyatics } = require('../controllers/url');

router.post("/", handelGenerateNewShortURL);

router.get("/analytics/:shortId", handelGetAnalyatics);

module.exports = router;