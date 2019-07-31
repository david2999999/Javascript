// Text nodes are represented by the Text type and contain plain text that is interpreted literally
// and may contain escaped HTML characters but no HTML code. A Text node has the following
// characteristics:
//     nodeType is 3.
//     nodeName is '#text'.
//     nodeValue is text contained in the node.
//     parentNode is an Element.
//     Child nodes are not supported.

// appendData(text) — Appends text to the end of the node.

// deleteData(offset, count) — Deletes count number of characters starting at position
// offset.

// insertData(offset, text) — Inserts text at position offset.

// replaceData(offset, count, text) — Replaces the text starting at offset through offset +
// count with text.

// splitText(offset) — Splits the text node into two text nodes separated at position offset.

// substringData(offset, count) — Extracts a string from the text beginning at position offset
// and continuing until offset + count.

var textNode = div.firstChild; //or div.childNodes[0]
div.firstChild.nodeValue = 'Some other message';
div.firstChild.nodeValue = 'Some <strong>other</strong> message';