// Both appendChild() and insertBefore() insert nodes without removing any. The
// replaceChild() method accepts two arguments: the node to insert and the node to replace. The
// node to replace is returned by the function and is removed from the document tree completely while
// the inserted node takes its place.

//replace first child
var returnedNode = someNode.replaceChild(newNode, someNode.firstChild);
//replace last child
returnedNode = someNode.replaceChild(newNode, someNode.lastChild);