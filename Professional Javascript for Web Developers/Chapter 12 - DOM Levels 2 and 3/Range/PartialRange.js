// Note that to select the node (using range1), you must fi rst determine the index of the given node
// (p1) in its parent node’s childNodes collection. To select the node contents (using range2), you
// do not need calculations; setStart() and setEnd() can be set with default values. Although
// mimicking selectNode() and selectNodeContents() is possible, the real power of setStart()
// and setEnd() is in the partial selection of nodes.

// Suppose that you want to select only from the .llo” in .Hello” to the .o” in .world!” in the
// previous HTML code. This is quite easy to accomplish.
var p1 = document.getElementById("p1"),
helloNode = p1.firstChild.firstChild,
    worldNode = p1.lastChild;

var range = document.createRange();
range.setStart(helloNode, 2);
range.setEnd(worldNode, 3);