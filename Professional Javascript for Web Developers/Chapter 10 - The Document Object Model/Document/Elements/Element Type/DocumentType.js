// The DocumentType type is not used very often in web browsers and is supported in only Firefox, Safari,
// and Opera. A DocumentType object contains all of the information about the document’s doctype and
// has the following characteristics:
        // nodeType is 10.
        // nodeName is the name of the doctype.
        // nodeValue is null.
        // parentNode is a Document.
        // Child nodes are not supported.

// DocumentType objects cannot be created dynamically in DOM Level 1; they are created only as the
// document’s code is being parsed. For browsers that support it, the DocumentType object is stored in
// document.doctype. DOM Level 1 describes three properties for DocumentType objects: name, which
// is the name of the doctype; entities, which is a NamedNodeMap of entities described by the doctype;
// and notations, which is a NamedNodeMap of notations described by the doctype. Because documents
// in browsers typically use an HTML or XHTML doctype, the entities and notations lists are
// typically empty. (They are fi lled only with inline doctypes.) For all intents and purposes, the name
// property is the only useful one available. This property is fi lled with the name of the doctype, which is
// the text that appears immediately after <!DOCTYPE. Consider the following HTML 4.01 strict doctype:
    // <!DOCTYPE HTML PUBLIC “-//W3C//DTD HTML 4.01//EN”
        // “http://www.w3.org/TR/html4/strict.dtd”>

alert(document.doctype.name); //”HTML”