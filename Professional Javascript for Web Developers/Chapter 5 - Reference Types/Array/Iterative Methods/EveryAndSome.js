// Of these methods, the two most similar are every() and some(), which both query the array for
// items matching some criteria. For every(), the passed-in function must return true for every item
// in order for the method to return true; otherwise, it returns false. The some() method, on the
// other hand, returns true if even one of the items causes the passed-in function to return true.

var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(function(item, index, array){
    return (item > 2);
});
alert(everyResult); //false

var someResult = numbers.some(function(item, index, array){
    return (item > 2);
});
alert(someResult); //true