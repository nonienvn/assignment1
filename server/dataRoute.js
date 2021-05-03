const express= require("express");
const router = express.Router();
const Data = require("./dataModel");
router.route('/create').post((req,res) => {
 const name = req.body.name;
 const symbol = req.body.symbol;
 const price = req.body.price;
 const newData = new Data({
     name,
     symbol,
     price
 });
 newData.save();
})

router.route('/create').get((req,res) => {
    res.send("hello")
})

router.route('/datas').get((req,res) => {
    Data.find()
       .then(foundDatas => res.json(foundDatas))
})
module.exports = router;