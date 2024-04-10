const mongoose = require("mongoose");

const itemOnSaleSchema = new mongoose.Schema({
    id:{
        type: String,
        unique: true,
        required: true,
    },
    itemName:{
        type: String,
        required: true
    },
    itemAmount:{
        type: Number,
        required: true
    }
});

const ItemsOnSale = new mongoose.model("ItemsOnSaleCollection", itemOnSaleSchema);

module.exports = ItemsOnSale;