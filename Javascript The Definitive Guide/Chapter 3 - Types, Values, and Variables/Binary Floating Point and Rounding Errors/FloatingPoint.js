// JavaScript numbers have plenty of precision and can approximate 0.1 very closely. But
// the fact that this number cannot be represented exactly can lead to problems. Consider
// this code:

var x = .3 - .2; // thirty cents minus 20 cents
var y = .2 - .1; // twenty cents minus 10 cents
x == y // => false: the two values are not the same!
x == .1 // => false: .3-.2 is not equal to .1
y == .1 // => true: .2-.1 is equal to .1

// Because of rounding error, the difference between the approximations of .3 and .2 is
// not exactly the same as the difference between the approximations of .2 and .1. It is
// important to understand that this problem is not specific to JavaScript: it affects any
// programming language that uses binary floating-point numbers. Also, note that the
// values x and y in the code above are very close to each other and to the correct value.
//     The computed values are adequate for almost any purpose: the problem arises when
// we attempt to compare values for equality.