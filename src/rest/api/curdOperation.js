const express = require("express");
const bodyParser = require("body-parser");
var dbConnect = require("../../controller/dbConnect");
// var  dbConnect = require('../../utils/cloudmongoAtlasConnection');
var generateUniqueId = require("../../modules/generateUniqueId");
var WordObject = require("../../models/WordModel");
var cors = require("cors");
// const mongoose = require('mongoose');

const app = express();

// Import Routes
const authRoute = require("../../../routes/auth");
const postRoute = require("../../pages/post");

app.use(cors());

app.use(bodyParser.json());
app.use(express.json());

app.use("/", express.static(__dirname + "/build"));
app.get("/", (req, res) => res.sendFile(__dirname + "/build/index.html"));

dbConnect();
// userCreddbConnect();
// console.log(conn.model.length());
// const changeStream = conn.watch().on('change', data => console.log(data));
// console.log("Change In DB: "+changeStream);

app.use("/api/users", authRoute);
app.use("/api/posts", postRoute);

app.get("/api/words", async (req, res) => {
  const words = await WordObject.find({});
  res.send(words);
});

app.post("/api/words", async (req, res) => {

  const { english_word } = req.body;
  const word = await WordObject.find({ "english_word" : english_word });

  // console.log("Word:  "+JSON.stringify(word)+" Word lenth: "+JSON.stringify(word).length);

  if(JSON.stringify(word).length > 0 || !(JSON.stringify(word).length)) {
    var uuid = await generateUniqueId(english_word);
    // console.log("UID:: " + uuid);
    // req._id = generateUniqueId(english_word);
    // console.log(english_word.length);
    var newWordObject = new WordObject(req.body);
    newWordObject._id = uuid; // assaign manual generated id to the mongodb object
    try {
      const savedWordObject = await newWordObject.save();
      res.send(savedWordObject);
    } catch (err) {
      console.log(JSON.stringify(err));
      res.status(400).send(err.errmsg);
    }
  } else {
    res.status(400).send(`The word ${ english_word } already exists in the database....`);
  }
 
});

app.delete("/api/words", async (req, res) => {
  const { english_word } = req.body;
  // console.log("eeeee::: "+english_word);
  const deletedWord = await WordObject.deleteMany({
    english_word: english_word,
  });
  // WordObject.findByIdAndDelete(req.params.id);
  res.send(deletedWord);
});

const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`serve at http://localhost:${port}`));
