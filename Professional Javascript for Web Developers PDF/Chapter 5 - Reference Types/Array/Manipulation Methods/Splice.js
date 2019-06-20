// Deletion — Any number of items can be deleted from the array by specifying just two
// arguments: the position of the fi rst item to delete and the number of items to delete. For
// example, splice(0, 2) deletes the fi rst two items.

// Insertion — Items can be inserted into a specifi c position by providing three or more
// arguments: the starting position, 0 (the number of items to delete), and the item to insert.
// Optionally, you can specify a fourth parameter, fi fth parameter, or any number of other
// parameters to insert. For example, splice(2, 0, “red”, “green”) inserts the strings
// “red” and “green” into the array at position 2.

// Replacement — Items can be inserted into a specifi c position while simultaneously
// deleting items, if you specify three arguments: the starting position, the number of items
// to delete, and any number of items to insert. The number of items to insert doesn’t have to
// match the number of items to delete. For example, splice(2, 1, “red”, “green”)
// deletes one item at position 2 and then inserts the strings “red” and “green” into the array
// at position 2.

var colors = [“red”, “green”, “blue”];
var removed = colors.splice(0,1); //remove the first item
alert(colors); //green,blue
alert(removed); //red - one item array

removed = colors.splice(1, 0, “yellow”, “orange”); //insert two items at position 1
alert(colors); //green,yellow,orange,blue
alert(removed); //empty array

removed = colors.splice(1, 1, “red”, “purple”); //insert two values, remove one
alert(colors); //green,red,purple,orange,blue
alert(removed); //yellow - one item array