// Each node has a parentNode property pointing to its parent in the document tree. All nodes
// contained within a childNodes list have the same parent, so each of their parentNode properties
// points to the same node. Additionally, each node within a childNodes list is considered to be
// a sibling of the other nodes in the same list. It’s possible to navigate from one node in the list to
// another by using the previousSibling and nextSibling properties. The fi rst node in the list has
// null for the value of its previousSibling property, and the last node in the list has null for the
// value of its nextSibling property, as shown in the following example:
if (someNode.nextSibling === null){
    alert('Last node in the parent’s childNodes list.');
} else if (someNode.previousSibling === null){
    alert('First node in the parent’s childNodes list.');
}

// Another relationship exists between a parent node and its fi rst and last child nodes. The firstChild
// and lastChild properties point to the fi rst and last node in the childNodes list, respectively. The
// value of someNode.firstChild is always equal to someNode.childNodes[0], and the value of
// someNode.lastChild is always equal to someNode.childNodes[someNode.childNodes.length-1].
// If there is only one child node, firstChild and lastChild point to the same node; if there are no
// children, then firstChild and lastChild are both null. All of these relationships help to navigate
// easily between nodes in a document structure.