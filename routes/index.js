var express = require('express');
var router = express.Router();
// add cors to router via a header

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST for calculation. */
router.post('/', function (req, res, next) {
  var output = 0;
  switch (req.body.opB) {
    case "add":
      output = parseFloat(req.body.opA) + parseFloat(req.body.opC)
      break;
    case "subtract":
      output = parseFloat(req.body.opA) - parseFloat(req.body.opC)
      break;
    case "multiply":
      output = parseFloat(req.body.opA) * parseFloat(req.body.opC)
      break;
    case "divide":
      output = parseFloat(req.body.opA) / parseFloat(req.body.opC)
      break;
    default:
      break;
  }
  res.set('Content-Type', 'text/html')
  res.send(output.toString())
});
module.exports = router;
