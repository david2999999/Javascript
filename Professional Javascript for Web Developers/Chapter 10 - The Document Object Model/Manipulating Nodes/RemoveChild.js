// To remove a node without replacing it, you can use the removeChild() method. This method
// accepts a single argument, which is the node to remove. The removed node is then returned as the
// function value,

//remove first child
var formerFirstChild = someNode.removeChild(someNode.firstChild);

//remove last child
var formerLastChild = someNode.removeChild(someNode.lastChild);

// As with replaceChild(), a node removed via removeChild() is still owned by the document but
// doesn’t have a specifi c location in the document.