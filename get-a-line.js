// A quick and easy wrapper for synchronous line reading in nodejs.
// Because dealing with callbacks when all I want is
// a goddamn input() function is ridiculous.

// From: http://stackoverflow.com/a/9318276/2200817

// Example usage:
// var getline = require('/get-a-line');
// var myinput = getline.fromstd();
// console.log("You typed: " + myinput);

const fs = require('fs');
const MAX_LINE_DATA = 1024 * 1024; // 1 MB per line

// instream should be a Readable Stream
var getline = function(instream){
  instream.resume();
  var input_size = fs.readSync(instream.fd, MAX_LINE_DATA, 0, "utf8");
  instream.pause();
  return input_size[0].trim();
}

var getlinestd = function(){
  return getline(process.stdin);
}

var getter = {
  from: getline,
  fromstd: getlinestd
}

module.exports = getter
