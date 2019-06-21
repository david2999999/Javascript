var num1 = 2;
var num2 = 20;
var num3 = --num1 + num2; //equals 21
var num4 = num1 + num2; //equals 21


var num1 = 2;
var num2 = 20;
var num3 = num1-- + num2; //equals 22
var num4 = num1 + num2; //equals 21

var s1 = “2”;
var s2 = “z”;
var b = false;
var f = 1.1;
var o = {
    valueOf: function() {
        return -1;
    }
};

s1++; //value becomes numeric 3
s2++; //value becomes NaN
b++; //value becomes numeric 1
f--; //value becomes 0.10000000000000009 (due to floating-point inaccuracies)
o--; //value becomes numeric -2