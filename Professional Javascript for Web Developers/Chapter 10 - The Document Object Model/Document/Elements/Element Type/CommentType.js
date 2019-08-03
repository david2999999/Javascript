// Comments are represented in the DOM by the Comment type. A Comment node has the following
// characteristics:
    // nodeType is 8.
    // nodeName is '#comment'.
    // nodeValue is the content of the comment.
    // parentNode is a Document or Element.
    // Child nodes are not supported.

// A comment node can be accessed as a child node from its parent. Consider the following HTML code:
    // <div id='myDiv'><!-- A comment --></div>

var div = document.getElementById('myDiv');
var comment = div.firstChild;
alert(comment.data); //'A comment'

// Not surprisingly, comment nodes are rarely accessed or created, because they serve very little purpose
// algorithmically. Additionally, browsers don’t recognize comments that exist after the closing </html>
// tag. If you need to access comment nodes, make sure they appear as descendants of the <html>
// element.