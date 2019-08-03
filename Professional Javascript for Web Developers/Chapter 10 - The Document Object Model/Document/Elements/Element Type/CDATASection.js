// CDATA sections are specifi c to XML-based documents and are represented by the CDATASection
// type. Similar to Comment, the CDATASection type inherits from the base Text type, so it has all
// of the same string manipulation methods except for splitText(). A CDATASection node has the
// following characteristics:
        // nodeType is 4.
        // nodeName is “#cdata-section”.
        //nodeValue is the contents of the CDATA section.
        // parentNode is a Document or Element.
        // Child nodes are not supported.

// CDATA sections are valid only in XML documents, so most browsers will incorrectly parse a CDATA
// section into either a Comment or an Element. Consider the following:
// <div id=”myDiv”><![CDATA[This is some content.]]></div>
// In this example, a CDATASection node should exist as the fi rst child of the <div>; however, none of
// the four major browsers interpret it as such. Even in valid XHTML pages, the browsers don’t properly
// support embedded CDATA sections.
// True XML documents allow the creation of CDATA sections using document.createCDataSection()
// and pass in the node’s content.