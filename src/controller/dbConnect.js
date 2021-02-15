const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const userModel = require("../models/UserModel");
// const wordModel = require("../models/WordModel");

dotenv.config();


const connection = {};

async function dbConnect() {
    // if (connection.isConnected) {
    //     return;
    // }

    const db = await mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, () => {
        console.log("Connected to Oragedb localhost...");
    });

    // db.model('User', userSchema);
    // db.model('Word', wordSchema);
    // connection.isConnected = db.connections[0].readyState;
    return db;
}
// const db = mongoose.createConnection(..);


module.exports = dbConnect;