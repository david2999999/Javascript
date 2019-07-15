// Suppose we have an array of numbers and we want to compute the mean and standard
// deviation of those values. We might do that in nonfunctional style like this:
var data = [1,1,3,5,5]; // This is our array of numbers
// The mean is the sum of the elements divided by the number of elements

var total = 0;
for(var i = 0; i < data.length; i++) total += data[i];
var mean = total/data.length; // The mean of our data is 3

// To compute the standard deviation, we first sum the squares of
// the deviation of each element from the mean.
total = 0;
for(var i = 0; i < data.length; i++) {
    var deviation = data[i] - mean;
    total += deviation * deviation;
}
var stddev = Math.sqrt(total/(data.length-1)); // The standard deviation is 2

// We can perform these same computations in concise functional style using the array
// methods map() and reduce() like this (see §7.9 to review these methods):
// First, define two simple functions
var sum = function(x,y) { return x+y; };
var square = function(x) { return x*x; };
// Then use those functions with Array methods to compute mean and stddev
var data = [1,1,3,5,5];
var mean = data.reduce(sum)/data.length;
var deviations = data.map(function(x) {return x-mean;});
var stddev = Math.sqrt(deviations.map(square).reduce(sum)/(data.length-1));