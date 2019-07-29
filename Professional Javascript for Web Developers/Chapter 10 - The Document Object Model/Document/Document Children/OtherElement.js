//As an instance of HTMLDocument, the document object also has a body property that points to the
// <body> element directly. Since this is the element most often used by developers, document.body
// tends to be used quite frequently in JavaScript, as this example shows:
var body = document.body; //get reference to <body>

// Another possible child node of a Document is a DocumentType. The <!DOCTYPE> tag is considered to
// be a separate entity from other parts of the document, and its information is accessible through the
// doctype property (document.doctype in browsers), as shown here:
var doctype = document.doctype; //get reference to <!DOCTYPE>