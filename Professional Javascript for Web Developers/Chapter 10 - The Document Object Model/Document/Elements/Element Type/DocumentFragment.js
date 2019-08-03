// Of all the node types, the DocumentFragment type is the only one that has no representation
// in markup. The DOM defi nes a document fragment as a 'lightweight' document, capable of
// containing and manipulating nodes without all of the additional overhead of a complete document.
// DocumentFragment nodes have the following characteristics:
        // nodeType is 11.
        // nodeName is '#document-fragment'.
        // nodeValue is null.
        // parentNode is null.
        // Child nodes may be Element, ProcessingInstruction, Comment, Text, CDATASection, or
        // EntityReference.

var fragment = document.createDocumentFragment();

// Document fragments inherit all methods from Node and are typically used to perform DOM
// manipulations that are to be applied to a document. If a node from the document is added to a
// document fragment, that node is removed from the document tree and won’t be rendered by the
// browser. New nodes that are added to a document fragment are also not part of the document
// tree. The contents of a document fragment can be added to a document via appendChild() or
// insertBefore(). When a document fragment is passed in as an argument to either of these
// methods, all of the document fragment’s child nodes are added in that spot; the document fragment
// itself is never added to the document tree. For example, consider the following HTML:

        // <ul id='myList'></ul>

var fragment = document.createDocumentFragment();
var ul = document.getElementById('myList');
var li = null;
for (var i=0; i < 3; i++){
    li = document.createElement('li');
    li.appendChild(document.createTextNode('Item ' + (i+1)));
    fragment.appendChild(li);
}
ul.appendChild(fragment);
