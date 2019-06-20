// The next method is filter(), which uses the given function to determine if an item should be
// included in the array that it returns. For example, to return an array of all numbers greater than 2.

var numbers = [1,2,3,4,5,4,3,2,1];

var filterResult = numbers.filter(function(item, index, array){
    return (item > 2);
});

alert(filterResult); //[3,4,5,4,3]