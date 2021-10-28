var express = require('express');
var router = express.Router();
var key = 0;
var value = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
    if(req.query!=={}){
        if(req.query.key){
            key = req.query.key;
        }else{
            key = Math.floor(Math.random()*14);
        }
    }
    value = Math.log(key);
  res.send(`Math.log() applied to ${key} is ${value}`);
});

module.exports = router;
