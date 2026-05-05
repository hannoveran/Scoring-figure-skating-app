const express = require('express');
const router = express.Router();

const controller = require('../controllers/resultsController');

router.get('/', controller.getResults);

module.exports = router;
