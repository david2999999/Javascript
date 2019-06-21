// The Math.random() method returns a random number between the 0 and the 1, not including either
// 0 or 1. This is a favorite tool of web sites that are trying to display random quotes or random facts
// upon entry of a web site. You can use Math.random() to select numbers within a certain integer
// range by using the following formula:

// number = Math.floor(Math.random() * total_number_of_choices + first_possible_value)

// The Math.floor() method is used here because Math.random() always returns a decimal value,
// meaning that multiplying it by a number and adding another still yields a decimal value. So, if you
// wanted to select a number between 1 and 10, the code would look like this:
var num = Math.floor(Math.random() * 10 + 1);

// There are only nine numbers when counting from 2 to 10, so the total number of choices is nine,
// with the fi rst possible value being 2. Many times, it’s just easier to use a function that handles the
// calculation of the total number of choices and the fi rst possible value, as in this example:
function selectFrom(lowerValue, upperValue) {
    var choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}

var num = selectFrom(2,10);
alert(num); //number between 2 and 10, inclusive

var colors = [“red”, “green”, “blue”, “yellow”, “black”, “purple”, “brown”];
var color = colors[selectFrom(0, colors.length-1)];