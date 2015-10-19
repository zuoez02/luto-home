var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  if(req.params.id == 0) {
  	console.log(req.params.id);
  	next();
  } else {
  	next('route');
  }
}, function (req,res) {
	res.send('end1');
});

router.get('/:id', function(req, res) {
	res.send('end2');
});

module.exports = router;
