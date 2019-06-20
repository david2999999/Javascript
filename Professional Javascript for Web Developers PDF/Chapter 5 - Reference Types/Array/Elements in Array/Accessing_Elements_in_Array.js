var colors = [“red”, “blue”, “green”]; //define an array of strings
alert(colors[0]); //display the first item
colors[2] = “black”; //change the third item
colors[3] = “brown”; //add a fourth item

// The index provided within the square brackets indicates the value being accessed. If the index is less
// than the number of items in the array, then it will return the value stored in the corresponding item,
// as colors[0] displays “red” in this example. Setting a value works in the same way, replacing the
// value in the designated position. If a value is set to an index that is past the end of the array, as with
// colors[3] in this example, the array length is automatically expanded to be that index plus 1 (so
// the length becomes 4 in this example because the index being used is 3).