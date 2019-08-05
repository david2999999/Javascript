// The Element Traversal API adds fi ve new properties to DOM elements:
// childElementCount — Returns the number of child elements (excludes text nodes and
// comments).

// firstElementChild — Points to the fi rst child that is an element. Element-only version
// of firstChild.

// lastElementChild — Points to the last child that is an element. Element-only version
// of lastChild.

// previousElementSibling — Points to the previous sibling that is an element. Element-only
// version of previousSibling.

// nextElementSibling — Points to the next sibling that is an element. Element-only version
// of nextSibling.
var i,
    len,
    child = element.firstElementChild;
while(child != element.lastElementChild){
    processChild(child); //already know it’s an element
    child = child.nextElementSibling;
}