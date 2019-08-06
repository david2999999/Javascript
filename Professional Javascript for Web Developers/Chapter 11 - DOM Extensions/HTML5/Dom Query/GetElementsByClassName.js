// The getElementsByClassName() method accepts a single argument, which is a string containing
// one or more class names, and returns a NodeList containing all elements that have all of the
// specifi ed classes applied. If multiple class names are specified, then the order is considered
// unimportant.

//get all elements with a class containing 'username' and 'current', though it
//doesn’t matter if one is declared before the other
var allCurrentUsernames = document.getElementsByClassName('username current');

//get all elements with a class of 'selected' that exist in myDiv’s subtree
var selected = document.getElementById('myDiv').getElementsByClassName('selected');

// When this method is called, it will return only elements in the subtree of the root from which it
// was called. Calling getElementsByClassName() on document always returns all elements with
// matching class names, whereas calling it on an element will return only descendant elements.

// This method is useful for attaching events to classes of elements rather than using IDs or tag
// names. Keep in mind that since the returned value is a NodeList, there are the same performance
// issues as when you’re using getElementsByTagName() and other DOM methods that return
// NodeList objects.