// One of the interesting things about ECMAScript arrays is that they provide a method to make an
// array behave like other data structures. An array object can act just like a stack, which is one of a
// group of data structures that restrict the insertion and removal of items. A stack is referred to
// as a last-in-fi rst-out (LIFO) structure, meaning that the most recently added item is the fi rst one
// removed. The insertion (called a push) and removal (called a pop) of items in a stack occur at only
// one point: the top of the stack. ECMAScript arrays provide push() and pop() specifi cally to allow
// stack-like behavior.

var colors = new Array(); //create an array
var count = colors.push(“red”, “green”); //push two items
alert(count); //2
count = colors.push(“black”); //push another item on
alert(count); //3
var item = colors.pop(); //get the last item
alert(item); //”black”
alert(colors.length); //2

var colors = [“red”, “blue”];
colors.push(“brown”); //add another item
colors[3] = “black”; //add an item
alert(colors.length); //4
var item = colors.pop(); //get the last item
alert(item); //”black”