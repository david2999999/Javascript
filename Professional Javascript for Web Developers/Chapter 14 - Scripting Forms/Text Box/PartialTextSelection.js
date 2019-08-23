textbox.value = 'Hello world!';

//select all text
textbox.setSelectionRange(0, textbox.value.length); //'Hello world!'

//select first three characters
textbox.setSelectionRange(0, 3); //'Hel'

//select characters 4 through 6
textbox.setSelectionRange(4, 7); //'o w'

// Internet Explorer 8 and earlier allow partial text selection through the use of ranges (discussed in
// Chapter 12). To select part of the text in a text box, you must fi rst create a range and place it in the
// correct position by using the createTextRange() method that Internet Explorer provides on text boxes
// and using the moveStart() and moveEnd() range methods to move the range into position. Before
// calling these methods, however, you need to collapse the range to the start of the text box using
// collapse(). After that, moveStart() moves both the starting and the end points of the range to the
// same position. You can then pass in the total number of characters to select as the argument to moveEnd().
// The last step is to use the range’s select() method to select the text,
textbox.value = 'Hello world!';
var range = textbox.createTextRange();
//select all text
range.collapse(true);
range.moveStart('character', 0);
range.moveEnd('character', textbox.value.length); //'Hello world!'
range.select();
//select first three characters
range.collapse(true);
range.moveStart('character', 0);
range.moveEnd('character', 3);
range.select(); //'Hel'
//select characters 4 through 6
range.collapse(true);
range.moveStart('character', 4);
range.moveEnd('character', 3);
range.select(); //'o w'