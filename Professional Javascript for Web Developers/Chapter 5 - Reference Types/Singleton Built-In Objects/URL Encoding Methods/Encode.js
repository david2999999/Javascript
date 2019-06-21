// The encodeURI() method is designed to work on an entire URI (for instance, www.wrox.com/
// illegal value.htm), whereas encodeURIComponent() is designed to work solely on a segment of
// a URI (such as illegal value.htm from the previous URI). The main difference between the two
// methods is that encodeURI() does not encode special characters that are part of a URI, such as the
// colon, forward slash, question mark, and pound sign, whereas encodeURIComponent() encodes
// every nonstandard character it fi nds.

var uri = "http://www.wrox.com/illegal value.htm#start";
//”http://www.wrox.com/illegal%20value.htm#start”
alert(encodeURI(uri));
//”http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start”
alert(encodeURIComponent(uri));