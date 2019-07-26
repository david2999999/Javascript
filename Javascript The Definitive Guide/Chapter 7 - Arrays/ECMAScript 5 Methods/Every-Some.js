// The every() and some() methods are array predicates: they apply a predicate function
// you specify to the elements of the array, and then return true or false.

// The every() method is like the mathematical “for all” quantifier ∀: it returns true if
// and only if your predicate function returns true for all elements in the array:
a = [1,2,3,4,5];
a.every(function(x) { return x < 10; }) // => true: all values < 10.
a.every(function(x) { return x % 2 === 0; }) // => false: not all values even.

// The some() method is like the mathematical “there exists” quantifier ∃: it returns
// true if there exists at least one element in the array for which the predicate returns
// true, and returns false if and only if the predicate returns false for all elements of
// the array:
a = [1,2,3,4,5];
a.some(function(x) { return x%2===0; }) // => true a has some even numbers.
a.some(isNaN) // => false: a has no non-numbers.