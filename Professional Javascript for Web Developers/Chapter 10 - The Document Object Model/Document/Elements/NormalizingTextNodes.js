// Sibling text nodes can be confusing in DOM documents since there is no simple text string that
// can’t be represented in a single text node. Still, it is not uncommon to come across sibling text
// nodes in DOM documents, so there is a method to join sibling text nodes together. This method is
// called normalize(), and it exists on the Node type (and thus is available on all node types). When
// normalize() is called on a parent of two or more text nodes, those nodes are merged into one text
// node whose nodeValue is equal to the concatenation of the nodeValue properties of each text node.
var element = document.createElement('div');
element.className = 'message';

var textNode = document.createTextNode('Hello world!');
element.appendChild(textNode);

var anotherTextNode = document.createTextNode('Yippee!');
element.appendChild(anotherTextNode);

document.body.appendChild(element);
alert(element.childNodes.length); //2

element.normalize();
alert(element.childNodes.length); //1
alert(element.firstChild.nodeValue); //'Hello world!Yippee!'