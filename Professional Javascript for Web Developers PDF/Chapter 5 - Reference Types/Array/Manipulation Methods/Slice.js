// The next method, slice(), creates an array that contains one or more items already
// contained in an array. The slice() method may accept one or two arguments: the starting and
// stopping positions of the items to return. If only one argument is present, the method returns
// all items between that position and the end of the array. If there are two arguments, the method
// returns all items between the start position and the end position, not including the item in the end
// position. Keep in mind that this operation does not affect the original array in any way.

var colors = [“red”, “green”, “blue”, “yellow”, “purple”];
var colors2 = colors.slice(1);
var colors3 = colors.slice(1,4);

alert(colors2); //green,blue,yellow,purple
alert(colors3); //green,blue,yellow