Just because callbacks and async are predominant in Javascript doesn't give you the right to mutilate everything.  

A wrapper for: http://stackoverflow.com/a/9318276/2200817  

# Gets a line from readable stream, like stdin. That's all folks.  

A quick and easy wrapper for synchronous line reading in nodejs.
Because dealing with callbacks when all I want is
a goddamn input() function is ridiculous.  

Example usage, assuming I've published this
or this lib file and your main file are in the same directory:  

    var getline = require('/get-a-line');
    var myinput = getline.fromstd();
    console.log("You typed: " + myinput);

Lines will be truncated after 1 megabyte of information.  
Read from other readable streams via `getline.from(stream)`.  
