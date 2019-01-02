var express = require('express');
var calculate = require('../public/javascripts/functions.mjs')
var router = express.Router();
// add cors to router via a header

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST for calculation. */
router.post('/', function (req, res, next) {
  res.set('Content-Type', 'text/html')
  res.send(calculate(req.body.opA, req.body.opB, req.body.opC))
});
module.exports = router;
