var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.headers);
  res.render('index', { title: 'HTTP-headers', headers: req.headers });
});

module.exports = router;
