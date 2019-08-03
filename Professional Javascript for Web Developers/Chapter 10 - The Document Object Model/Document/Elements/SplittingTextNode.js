// The Text type has a method that does the opposite of normalize(): the splitText() method splits
// a text node into two text nodes, separating the nodeValue at a given offset. The original text node
// contains the text up to the specifi ed offset, and the new text node contains the rest of the text. The
// method returns the new text node, which has the same parentNode as the original.
var element = document.createElement('div');
element.className = 'message';

var textNode = document.createTextNode('Hello world!');
element.appendChild(textNode);

document.body.appendChild(element);

var newNode = element.firstChild.splitText(5);
alert(element.firstChild.nodeValue); //'Hello'
alert(newNode.nodeValue); //' world!'
alert(element.childNodes.length); //2