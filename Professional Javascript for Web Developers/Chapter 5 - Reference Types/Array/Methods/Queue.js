var colors = new Array(); //create an array
var count = colors.push(“red”, “green”); //push two items
alert(count); //2
count = colors.push(“black”); //push another item on
alert(count); //3
var item = colors.shift(); //get the fi rst item
alert(item); //”red”
alert(colors.length); //2

var colors = new Array(); //create an array
var count = colors.unshift(“red”, “green”); //push two items
alert(count); //2
count = colors.unshift(“black”); //push another item on
alert(count); //3
var item = colors.pop(); //get the first item
alert(item); //”green”
alert(colors.length); //2