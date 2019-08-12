// Of course, the true power of TreeWalker is its ability to move around the DOM structure. Instead
// of specifying fi lter, it’s possible to get at the <li> elements by navigating through the DOM tree
// using TreeWalker
var div = document.getElementById('div1');
var walker = document.createTreeWalker(div, NodeFilter.SHOW_ELEMENT, null, false);

walker.firstChild(); //go to <p>
walker.nextSibling(); //go to <ul>

var node = walker.firstChild(); //go to fi rst <li>
while (node !== null) {
    alert(node.tagName);
    node = walker.nextSibling();
}

// Since you know where the <li> elements are located in the document structure, it’s possible
// to navigate there, using firstChild() to get to the <p> element, nextSibling() to get to the <ul>
// element, and then firstChild() to get to the fi rst <li> element. Keep in mind that TreeWalker is
// returning only elements (because of the second argument passed in to createTreeWalker()). Then,
// nextSibling() can be used to visit each <li> until there are no more, at which point the method
// returns null.