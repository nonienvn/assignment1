const express = require ('express');
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const axios = require('axios');

var arrayy = [];
 app.use(cors());
 
 app.use(express.json());
 mongoose.connect('mongodb://localhost:27017/stockdb', {useNewUrlParser: true});
app.use("/", require("./dataRoute"));
 mongoose.connection
    .once('open', function () {
      console.log('MongoDB running');
    })
    .on('error', function (err) {
      console.log(err);
    });
    app.get('/wheath', async(req, res) =>{

        
            let data;
            // fetch data from a url endpoint
          const result = await axios.get("http://ondemand.websol.barchart.com/getQuote.json?apikey=ondemand&symbols=fb,amzn,goog&fields=lastPrice")
            data = result;
            console.log(data.data.results) 
            
            arrayy = data.data.results;
          
         
        res.send(
            arrayy
          )}
      );
app.listen(3001, () => {
    console.log('app running ')
} );