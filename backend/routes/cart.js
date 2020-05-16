var express = require('express');
var router = express.Router();
var Cart=require('../models/cart');

router.get('/', (req, res, next)=> {
  Cart.find((err,items)=>{
      return (err?console.log(err):res.json(items));
  });
});

router.post('/', (req, res, next)=> {
    let cartItem = new Cart(req.body);
    cartItem.save().then(item => {
            res.status(200).json(item);
    })
    .catch(err => {
            res.status(400).send(err);
    });
});

router.delete('/',(req, res, next)=> {
    Cart.deleteOne(req.body)
    .then(()=>{
        console.log('Remove item from cart with option ',req.body);
    })
    .catch(err=>{
        res.status(400).send(err);
    });
});

module.exports = router;
