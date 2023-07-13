const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoDB = "mongodb://127.0.0.1:27017/MongoNode";
mongoose.set('strictQuery', true);
const UserModel = require('./models/user.model')

mongoose.connect(mongoDB, (err) => {
    if (err)
        console.log(`Unable to connect: ${err}`);
    else
        console.log("MongoDB is connected.");
})

// UserModel({
//     name: "Insta User 1",
//     age: 41,
//     mobile: 1234354678
// }).save((err, db) => {
//     if (err) {
//         console.error(err.message);;
//     }
//     else {
//         console.log(`User data saved successfull ${db}`);
//     }
// })

// UserModel.find({ name: "Insta User 1" }, (err, db) => {
//     if (err) {
//         console.error(err.message);;
//     }
//     else {
//         console.log(`Find data: ${db}`);
//     }
// })


app.listen(3000, () => {
    console.log("server is running on port: 3000");
})