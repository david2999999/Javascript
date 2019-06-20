// The map() method also returns an array. Each item in the array is the result of running the passedin
// function on the original array item in the same location. For example, you can multiply every
// number in an array by two and are returned an array of those numbers

var numbers = [1,2,3,4,5,4,3,2,1];
var mapResult = numbers.map(function(item, index, array){
    return item * 2;
});

alert(mapResult); //[2,4,6,8,10,8,6,4,2]