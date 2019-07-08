// reduceRight() works just like reduce(), except that it processes the array from highest
// index to lowest (right-to-left), rather than from lowest to highest. You might want to
// do this if the reduction operation has right-to-left precedence, for example:

var a = [2, 3, 4]
// Compute 2^(3^4). Exponentiation has right-to-left precedence
var big = a.reduceRight(function(accumulator,value) {
    return Math.pow(value,accumulator);
});