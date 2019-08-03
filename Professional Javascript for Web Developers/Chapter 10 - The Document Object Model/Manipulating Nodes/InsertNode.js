// When a node needs to be placed in a specifi c location within the childNodes list, instead of just
// at the end, the insertBefore() method may be used. The insertBefore() method accepts two
// arguments: the node to insert and a reference node. The node to insert becomes the previous sibling
// of the reference node and is ultimately returned by the method. If the reference node is null, then
// insertBefore() acts the same as appendChild(),

//insert as last child
returnedNode = someNode.insertBefore(newNode, null);
alert(newNode == someNode.lastChild); //true
//insert as the new first child
returnedNode = someNode.insertBefore(newNode, someNode.firstChild);
alert(returnedNode == newNode); //true
alert(newNode == someNode.firstChild); //true
//insert before last child
returnedNode = someNode.insertBefore(newNode, someNode.lastChild);
alert(newNode == someNode.childNodes[someNode.childNodes.length-2]); //true