const mongoose = require("mongoose");

const itemOnSaleSchema = new mongoose.Schema({
    id:{
        type: String,
        unique: true,
        required: true,
    },
    name:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    type: {
        type: String
    },
    quality: {
        type: String,
    },
    category: {
        type: String,
    },
    origin: {
        type: String,
    },
    price: {
        type: Number,
    }
});

const ItemsOnSale = new mongoose.model("ItemsOnSaleCollection", itemOnSaleSchema);

module.exports = ItemsOnSale;