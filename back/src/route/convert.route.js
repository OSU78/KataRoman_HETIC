const express = require('express');
const router = express.Router();
const convertToRoman = require('../controller/convertToRomanNumber.controller');

router.post('/converttoroman',convertToRoman.convertToRoman)

module.exports = router;