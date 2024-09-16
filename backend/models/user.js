const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        isRequired: true,
        unique: true
    },
    password:{
        type: String,
        isRequired: true,
        unique: true
    }
})

const User = new mongoose.model("userCollection", userSchema);

module.exports = User;