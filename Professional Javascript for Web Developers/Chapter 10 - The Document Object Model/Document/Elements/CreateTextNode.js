var textNode = document.createTextNode('<strong>Hello</strong> world!');

// When a new text node is created, its ownerDocument property is set, but it does not appear in the
// browser window until it is added to a node in the document tree. The following code creates a new
// <div> element and adds a message to it:
var element = document.createElement('div');
element.className = 'message';
var textNode = document.createTextNode('Hello world!');
element.appendChild(textNode);
document.body.appendChild(element);

// Typically elements have only one text node as a child. However, it is possible to have multiple text
// nodes as children, as this example demonstrates:
var element = document.createElement('div');
element.className = 'message';
var textNode = document.createTextNode('Hello world!');
element.appendChild(textNode);
var anotherTextNode = document.createTextNode('Yippee!');
element.appendChild(anotherTextNode);
document.body.appendChild(element);