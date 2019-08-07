// When used in read mode, innerHTML returns the HTML representing all of the child nodes,
// including elements, comments, and text nodes. When used in write mode, innerHTML completely
// replaces all of the child nodes in the element with a new DOM subtree based on the specifi ed value.
// Consider the following HTML code:

// <div id='content'>
    // <p>This is a <strong>paragraph</strong> with a list following it.</p>
    // <ul>
        // <li>Item 1</li>
        // <li>Item 2</li>
        // <li>Item 3</li>
    // </ul>
// </div>

// For the <div> element in this example, the innerHTML property returns the following string:
// <p>This is a <strong>paragraph</strong> with a list following it.</p>
// <ul>
    // <li>Item 1</li>
    // <li>Item 2</li>
    // <li>Item 3</li>
// </ul>

// When used in write mode, innerHTML parses the given string into a DOM subtree and replaces all of
// the existing child nodes with it. Because the string is considered to be HTML, all tags are converted
// into elements in the standard way that the browser handles HTML (again, this differs from browser
// to browser). Setting simple text without any HTML tags, as shown here, sets the plain text:
 div.innerHTML ='Hello world!';

// Setting innerHTML to a string containing HTML behaves quite differently as innerHTML parses
// them. Consider the following example:
// div.innerHTML ='Hello & welcome, <b>\'reader\'!</b>';

// The result of this operation is as follows:
// <div id='content'>Hello &amp; welcome, <b>&quot;reader&quot;!</b></div>