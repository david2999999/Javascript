var floatNum1 = 1.1;
var floatNum2 = 0.1;
var floatNum3 = .1; //valid, but not recommended


// Because storing fl oating-point values uses twice as much memory as storing integer values,
// ECMAScript always looks for ways to convert values into integers. When there is no digit after the
// decimal point, the number becomes an integer.
var floatNum1 = 1.; //missing digit after decimal - interpreted as integer 1
var floatNum2 = 10.0; //whole number - interpreted as integer 10

var floatNum = 3.125e7; //equal to 31250000