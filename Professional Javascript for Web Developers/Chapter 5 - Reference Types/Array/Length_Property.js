var colors = [“red”, “blue”, “green”]; //creates an array with three strings
var names = []; //creates an empty array
alert(colors.length); //3
alert(names.length); //0

// Here, the array colors starts out with three values. Setting the length to 2 removes the last item
// (in position 2), making it no longer accessible using colors[2].
var colors = [“red”, “blue”, “green”]; //creates an array with three strings
colors.length = 2;
alert(colors[2]); //undefined

// This code sets the length of the colors array to 4 even though it contains only three items. Position 3
// does not exist in the array, so trying to access its value results in the special value undefined being
// returned.
var colors = [“red”, “blue”, “green”]; //creates an array with three strings
colors.length = 4;
alert(colors[3]); //undefined