// Both methods accept two arguments: a function to call on each item and an optional initial value
// upon which the reduction is based. The function passed into reduce() or reduceRight() accepts
// four arguments: the previous value, the current value, the item’s index, and the array object. Any
// value returned from the function is automatically passed in as the fi rst argument for the next item.
// The fi rst iteration occurs on the second item in the array, so the fi rst argument is the fi rst item in the
// array and the second argument is the second item in the array.

var values = [1,2,3,4,5];
var sum = values.reduce(function(prev, cur, index, array){
    return prev + cur;
});
alert(sum); //15

var values = [1,2,3,4,5];
var sum = values.reduceRight(function(prev, cur, index, array){
    return prev + cur;
});
alert(sum); //15