// The Math object also contains many methods aimed at performing both simple and complex
// mathematical calculations.
// The min() and max() methods determine which number is the smallest or largest in a group of
// numbers. These methods accept any number of parameters, as shown in the following example:
var max = Math.max(3, 54, 32, 16);
alert(max); //54

var min = Math.min(3, 54, 32, 16);
alert(min); //3

// Out of the numbers 3, 54, 32, and 16, Math.max() returns the number 54, whereas Math.min()
// returns the number 3. These methods are useful for avoiding extra loops and if statements to
// determine the maximum value out of a group of numbers.
// To fi nd the maximum or the minimum value in an array, you can use the apply() method as follows:
var values = [1, 2, 3, 4, 5, 6, 7, 8];
var max = Math.max.apply(Math, values);