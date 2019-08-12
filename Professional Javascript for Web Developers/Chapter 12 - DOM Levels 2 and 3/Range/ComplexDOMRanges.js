// Creating complex ranges requires the use of the setStart() and setEnd() methods. Both methods
// accept two arguments: a reference node and an offset. For setStart(), the reference node becomes
// the startContainer, and the offset becomes the startOffset. For setEnd(), the reference node
// becomes the endContainer, and the offset becomes the endOffset.
var range1 = document.createRange(),
    range2 = document.createRange(),
    p1 = document.getElementById('p1'),
p1Index = -1,
    i, len;
for (i=0, len=p1.parentNode.childNodes.length; i < len; i++) {
    if (p1.parentNode.childNodes[i] == p1) {
        p1Index = i;
        break;
    }
}
range1.setStart(p1.parentNode, p1Index);
range1.setEnd(p1.parentNode, p1Index + 1);
range2.setStart(p1, 0);
range2.setEnd(p1, p1.childNodes.length);