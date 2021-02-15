var fs = require("fs");
var axios = require("axios");
// var output;
var lineReader = require("readline").createInterface({
  input: fs.createReadStream(__dirname + "/words_alpha.txt"),
});

// var output = fs.createWriteStream(__dirname + '/output.txt');

try {

  lineReader.on("line", function (line) {
    // var array = line.split(',');
    console.log(line + " --- ");

    axios
      .post("http://localhost:5000/api/words", {
        "english_word" : line,
        "bengali_meanings" : " ",
      })
      .then(function (response) {
        console.log(JSON.stringify(response));
      })
      .catch(function (error) {
        console.log(JSON.stringify(error));
      });

  });

} catch (err) {
  console.log(err);
}
