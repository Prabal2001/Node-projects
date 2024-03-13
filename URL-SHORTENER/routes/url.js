const express = require('express');
const{handlegenerateNewShortURL,getHandleAnalytics} = require('../controllers/url');
const router = express.Router();

router.post('/',handlegenerateNewShortURL);

router.get('/analytics/:shortId',getHandleAnalytics);

module.exports = router;