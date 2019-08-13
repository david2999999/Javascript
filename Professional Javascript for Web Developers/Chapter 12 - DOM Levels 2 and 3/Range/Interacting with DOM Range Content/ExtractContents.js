// extractContents() is similar to deleteContents() in that it also removes the range selection from
// the document. The difference is that extractContents() returns the range’s document fragment as the
// function value. This allows you to insert the contents of the range somewhere else.
var p1 = document.getElementById('p1'),
helloNode = p1.firstChild.firstChild,
    worldNode = p1.lastChild,
    range = document.createRange();

range.setStart(helloNode, 2);
range.setEnd(worldNode, 3);

var fragment = range.extractContents();
p1.parentNode.appendChild(fragment);