// Partial application becomes even more interesting when we combine it with other
// higher-order functions. Here, for example, is a way to define the not() function shown
// above using composition and partial application:
var not = partialLeft(compose, function(x) { return !x; });
var even = function(x) { return x % 2 === 0; };
var odd = not(even);
var isNumber = not(isNaN)