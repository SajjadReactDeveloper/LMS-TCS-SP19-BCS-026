var express = require('express');
var router = express.Router();
const Student = require('../models/student')
const Class = require('../models/class')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//My Route
router.get('delquiz/:id', function(req, res, next) {
  Class.updateOne({'quizes._id': req.params.id}, 
  {
    $pull: 
    { 
      'quizes': 
      {
        "_id": req.params.id
      }            
    }
  }).exec(function(err, result){
    if(err) throw err;
    res.json(result);
  });
 });

module.exports = router;