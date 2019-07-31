// The getElementById() method accepts a single argument — the ID of an element to retrieve — and
// returns the element if found, or null if an element with that ID doesn’t exist. The ID must be an
// exact match, including character case, to the id attribute of an element on the page. Consider the
// following element:

//<div id='myDiv'>Some text</div>

var div = document.getElementById('myDiv'); //retrieve reference to the <div>
var div = document.getElementById('mydiv'); //won’t work (except in IE <= 7)

// Internet Explorer prior to version 8 considered IDs to be case-insensitive, so 'myDiv' and 'mydiv'
// are considered to be the same element ID.