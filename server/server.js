const express = require('express')
const bodyparser = require('body-parser');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const access = require("./routes/login")
const {login, register} = access;

const { log } = require('console');


app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;

// Mongo connection
const connectionString = 'mongodb://127.0.0.1:27017/funfiles'
const connect = async () =>{
    const connect = await mongoose.connect(connectionString, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    return connect;
}


// ! create reg details
app.use(register)

// ! confirm login details
app.use(login)


connect().then(
    app.listen(9000, () =>{
        console.log("databse connected");
        console.log('server listening on port 9000');
    })
).catch((err)=>{
    console.log(err);
})
