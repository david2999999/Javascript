// A node’s type is easy to determine by comparing against one of these constants, as shown here:
if (someNode.nodeType == Node.ELEMENT_NODE){ //won’t work in IE < 9
    alert('Node is an element.');
}

if (someNode.nodeType == 1){ //works in all browsers
    alert('Node is an element.');
}

if (someNode.nodeType == 1){
    value = someNode.nodeName; //will be the element’s tag name
}