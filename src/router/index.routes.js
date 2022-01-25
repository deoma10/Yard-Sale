const express = require('express');
const router = express.Router();

router.use('/', require('./pages.routes'));


module.exports = router;