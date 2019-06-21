//January 1, 2000 at midnight GMT
var y2k = new Date(Date.UTC(2000, 0));

//May 5, 2005 at 5:55:55 PM GMT
var allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));

//January 1, 2000 at midnight in local time
var y2k = new Date(2000, 0);

//May 5, 2005 at 5:55:55 PM local time
var allFives = new Date(2005, 4, 5, 17, 55, 55);


//get start time
var start = Date.now();

//call a function
doSomething();

//get stop time
var stop = Date.now(),
result = stop - start;

// The Date.now() method has been implemented in Internet Explorer 9+, Firefox 3+, Safari 3+,
// Opera 10.5, and Chrome. For browsers that don’t yet support this method, you can simulate the
// same behavior by using the + operator to convert a Date object into a number:
//get start time
var start = +new Date();

//call a function
doSomething();

//get stop time
var stop = +new Date(),
result = stop - start;