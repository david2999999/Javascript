// When a range isn’t selecting any part of a document, it
// is said to be collapsed. Collapsing a range resembles
// the behavior of a text box. When you have text in a
// text box, you can highlight an entire word using the
// mouse. However, if you left-click the mouse again,
// the selection is removed and the cursor is located
// between two letters. When you collapse a range, its
// location is set between parts of a document, either
// at the beginning of the range selection or at the end.

range.collapse(true); //collapse to the starting point
alert(range.collapsed); //outputs 'true'

// <p id='p1'>Paragraph 1</p><p id='p2'>Paragraph 2</p>
var p1 = document.getElementById('p1'),
p2 = document.getElementById('p2'),
range = document.createRange();
range.setStartAfter(p1);
range.setStartBefore(p2);
alert(range.collapsed); //outputs 'true'

// In this case, the created range is collapsed, because there is nothing between the end of p1 and the
// beginning of p2.