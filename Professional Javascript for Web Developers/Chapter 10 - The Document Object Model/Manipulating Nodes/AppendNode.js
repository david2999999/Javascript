// Because all relationship pointers are read-only, several methods are available to manipulate nodes.
// The most often-used method is appendChild(), which adds a node to the end of the childNodes
// list. Doing so updates all of the relationship pointers in the newly added node, the parent node, and
// the previous last child in the childNodes list. When complete, appendChild() returns the newly
// added node. Here is an example:
var returnedNode = someNode.appendChild(newNode);
alert(returnedNode == newNode); //true
alert(someNode.lastChild == newNode); //true

// If the node passed into appendChild() is already part of the document, it is removed from its previous
// location and placed at the new location. Even though the DOM tree is connected by a series of pointers,
// no DOM node may exist in more than one location in a document. So if you call appendChild()and
// pass in the fi rst child of a parent, as the following example shows, it will end up as the last child:
//assume multiple children for someNode
var returnedNode = someNode.appendChild(someNode.firstChild);
alert(returnedNode == someNode.firstChild); //false
alert(returnedNode == someNode.lastChild); //true