const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    username : {
        type : String,
        unique : true,
    },
    passwordHash : String,
    email : {
        type : String,
        unique : true,
    }

})

const loginCollection = mongoose.model("loginCollection", loginSchema);
module.exports = loginCollection;