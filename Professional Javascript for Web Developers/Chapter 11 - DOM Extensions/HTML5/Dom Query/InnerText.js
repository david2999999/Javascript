// <div id='content'>
//     <p>This is a <strong>paragraph</strong> with a list following it.</p>
//     <ul>
//         <li>Item 1</li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//     </ul>
// </div>

// For the <div> element in this example, the innerText property returns the following string:
    // This is a paragraph with a list following it.
    // Item 1
    // Item 2
    // Item 3

// Note that different browsers treat white space in different ways, so the formatting may or may not
// include the indentation in the original HTML code.
// Using the innerText property to set the contents of the <div> element is as simple as this single
// line of code:
div.innerText = 'Hello world!';

// Setting innerText can never result in anything other than a single text node as the child of the
// container, so the HTML-encoding of the text must take place in order to keep to that single
// text node. The innerText property is also useful for stripping out HTML tags. By setting the
// innerText equal to the innerText, as shown here, all HTML tags are removed:
div.innerText = div.innerText;

// The innerText property is supported in Internet Explorer 4+, Safari 3+, Opera 8+, and Chrome.
// Firefox does not support innerText, but it supports an equivalent property called textContent.
// The textContent property is specifi ed in DOM Level 3 and is also supported by Internet Explorer
// 9+, Safari 3+, Opera 10+, and Chrome. For cross-browser compatibility, it’s helpful to use functions
// that check which property is available, as follows:
function getInnerText(element){
    return (typeof element.textContent == 'string') ?
    element.textContent : element.innerText;
}

function setInnerText(element, text){
    if (typeof element.textContent == 'string'){
        element.textContent = text;
    } else {
        element.innerText = text;
    }
}