var found = true;
var lost = false;


// Though there are just two literal Boolean values, all types of values have Boolean equivalents in
// ECMAScript. To convert a value into its Boolean equivalent, the special Boolean() casting function
// is called, like this:
var message = "Hello world!";
var messageAsBoolean = Boolean(message);

var message = "Hello world!";
if (message){
    alert("Value is true");
}