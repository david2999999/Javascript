// The last item in an array is always at position length – 1, so the next available open slot is at
// position length. Each time an item is added after the last one in the array, the length property is
// automatically updated to refl ect the change. That means colors[colors.length] assigns a value
// to position 3 in the second line of this example and to position 4 in the last line.
var colors = [“red”, “blue”, “green”]; //creates an array with three strings
colors[colors.length] = “black”; //add a color (position 3)
colors[colors.length] = “brown”; //add another color (position 4)

var colors = [“red”, “blue”, “green”]; //creates an array with three strings
colors[99] = “black”; //add a color (position 99)
alert(colors.length); //100