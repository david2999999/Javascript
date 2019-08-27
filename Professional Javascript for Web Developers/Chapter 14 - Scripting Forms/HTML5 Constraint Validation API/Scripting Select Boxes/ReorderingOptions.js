// Before the DOM, moving options from one select box to another was a rather arduous process
// that involved removing the option from the fi rst select box, creating a new option with the same
// name and value, and then adding that new option to the second select box. Using DOM methods,
// it’s possible to literally move an option from the fi rst select box into the second select box by
// using the appendChild() method. If you pass an element that is already in the document into this
// method, the element is removed from its parent and put into the position specified. For example, the
// following code moves the first option from one select box into another select box.
var selectbox1 = document.getElementById('selLocations1');
var selectbox2 = document.getElementById('selLocations2');

selectbox2.appendChild(selectbox1.options[0]);

// Reordering options is very similar, and DOM methods are the best way to accomplish this. To
// move an option to a particular location in the select box, the insertBefore() method is most
// appropriate, though the appendChild() method can be used to move any option to the last
// position. To move an option up one spot in the select box, you can use the following code:
var optionToMove = selectbox.options[1];
selectbox.insertBefore(optionToMove, selectbox.options[optionToMove.index-1]);

// In this code, an option is selected to move and then inserted before the option that is in the previous
// index. The second line of code is generic enough to work with any option in the select box except
// the first.
var optionToMove = selectbox.options[1];
selectbox.insertBefore(optionToMove, selectbox.options[optionToMove.index+2]);