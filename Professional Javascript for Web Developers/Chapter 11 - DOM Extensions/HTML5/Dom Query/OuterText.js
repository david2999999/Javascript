// The outerText property works in the same way as innerText except that it includes the node on
// which it’s called. For reading text values, outerText and innerText essentially behave in the exact
// same way. In writing mode, however, outerText behaves very differently. Instead of replacing just
// the child nodes of the element on which it’s used, outerText actually replaces the entire element,
// including its child nodes. Consider the following:
div.outerText = 'Hello world!';

// This single line of code is equivalent to the following two lines:
var text = document.createTextNode('Hello world!');
div.parentNode.replaceChild(text, div);