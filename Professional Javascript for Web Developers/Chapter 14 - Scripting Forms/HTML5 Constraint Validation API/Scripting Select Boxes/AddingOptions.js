var newOption = document.createElement('option');
newOption.appendChild(document.createTextNode('Option text'));
newOption.setAttribute('value', 'Option value');
selectbox.appendChild(newOption);

// Another way to add a new option is to use the select box’s add() method. The DOM specifies that
// this method accepts two arguments: the new option to add and the option before which the new
// option should be inserted. To add an option at the end of the list, the second argument should be null.
// The Internet Explorer 8 and earlier implementation of add() is slightly different in that the second
// argument is optional, and it must be the index of the option before which to insert the new option.
// DOM-compliant browsers require the second argument, so you can’t use just one argument for a crossbrowser
// approach (Internet Explorer 9 is DOM-compliant).
var newOption = new Option('Option text', 'Option value');
selectbox.add(newOption, undefined); //best solution