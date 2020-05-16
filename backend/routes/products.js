var express = require('express');
var router = express.Router();
var Product=require('../models/products');

router.get('/', (req, res, next)=> {
  Product.find((err,products)=>{
      return (err?console.log(err):res.json(products));
  });
});

module.exports = router;
