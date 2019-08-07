// One of the issues not addressed by the DOM specifi cation is how to scroll areas of a page. To fi ll
// this gap, browsers implemented several methods that control scrolling in different ways. Of the
// various proprietary methods, only scrollIntoView() was selected for inclusion in HTML5.
// The scrollIntoView() method exists on all HTML elements and scrolls the browser window or
// container element so the element is visible in the viewport. If an argument of true is supplied or the
// argument is omitted, the window scrolls so that the top of the element is at the top of the viewport
// (if possible); otherwise, the element is scrolled so that it is fully visible in the viewport but may not
// be aligned at the top.
//make sure this element is visible
document.forms[0].scrollIntoView();