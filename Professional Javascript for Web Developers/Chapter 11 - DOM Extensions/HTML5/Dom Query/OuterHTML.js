// When outerHTML is called in read mode, it returns the HTML of the element on which it is called,
// as well as its child nodes. When called in write mode, outerHTML replaces the node on which it is
// called with the DOM subtree created from parsing the given HTML string. Consider the following
// HTML code:
// <div id='content'>
    // <p>This is a <strong>paragraph</strong> with a list following it.</p>
    // <ul>
        // <li>Item 1</li>
        // <li>Item 2</li>
        // <li>Item 3</li>
    // </ul>
// </div>

// When outerHTML is called on the <div> in this example, the same code is returned, including
// the code for the <div>. Note that there may be differences based on how the browser parses
// and interprets the HTML code. (These are the same types of differences you’ll notice when
// using innerHTML.)

// Use outerHTML to set a value in the following manner:
div.outerHTML ='<p>This is a paragraph.</p>';

// This code performs the same operation as the following DOM code:
var p = document.createElement('p');
p.appendChild(document.createTextNode('This is a paragraph.'));
div.parentNode.replaceChild(p, div);