express = require('express');
 router = express.Router();
 verifyToken=require('./VariftTokenMw');
var customer=[{Id:1,Name:"anjali",class:"1"},{Id:2,Name:"ram",class:"12"}]
// router.get('/data', function(req, res, next) {
//     res.json(customer);
//   });
  router.get('/data',verifyToken, function(req, res, next) {
    res.json(customer);
  });
  module.exports=(router);