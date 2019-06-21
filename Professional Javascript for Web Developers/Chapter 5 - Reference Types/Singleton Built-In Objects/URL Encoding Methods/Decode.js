// The two counterparts to encodeURI() and encodeURIComponent() are decodeURI() and
// decodeURIComponent(). The decodeURI() method decodes only characters that would have
// been replaced by using encodeURI(). For instance, %20 is replaced with a space, but %23 is not
// replaced because it represents a pound sign (#), which encodeURI() does not replace. Likewise,
// decodeURIComponent() decodes all characters encoded by encodeURIComponent(), essentially
// meaning it decodes all special values. Consider this example:
var uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start";
//http%3A%2F%2Fwww.wrox.com%2Fillegal value.htm%23start
alert(decodeURI(uri));
//http://www.wrox.com/illegal value.htm#start
alert(decodeURIComponent(uri));