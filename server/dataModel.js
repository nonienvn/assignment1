const mongoose = require("mongoose");

const dataSchema = {
    name: String,
    symbol: String,
    price : Number
}

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;