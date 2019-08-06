// HTML5 adds functionality to aid with focus management in the DOM. The fi rst is document
// .activeElement, which always contains a pointer to the DOM element that currently has focus.
// An element can receive focus automatically as the page is loading, via user input (typically using the
// Tab key), or programmatically using the focus() method
var button = document.getElementById('myButton');
button.focus();
alert(document.activeElement === button); //true

// By default, document.activeElement is set to document.body when the document is fi rst loaded.
// Before the document is fully loaded, document.activeElement is null.
// The second addition is document.hasFocus(), which returns a Boolean value indicating if the
// document has focus:
var button = document.getElementById('myButton');
button.focus();
alert(document.hasFocus()); //true