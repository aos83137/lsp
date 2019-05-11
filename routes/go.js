var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<img src="./images/annyeon.gif">');
});

module.exports = router;
