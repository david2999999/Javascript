// The querySelectorAll() method accepts the same single argument as querySelector() — the
// CSS query — but returns all matching nodes instead of just one. This method returns a static
// instance of NodeList.

// To clarify, the return value is actually a NodeList with all of the expected properties and methods,
// but its underlying implementation acts as a snapshot of elements rather than a dynamic query that is
// constantly reexecuted against a document. This implementation eliminates most of the performance
// overhead associated with the use of NodeList objects.

//get all <em> elements in a <div> (similar to getElementsByTagName('em'))
var ems = document.getElementById('myDiv').querySelectorAll('em');

//get all elements with class of 'selected'
var selecteds = document.querySelectorAll('.selected');

//get all <strong> elements inside of <p> elements
var strongs = document.querySelectorAll('p strong');

var i, len, strong;
for (i=0, len=strongs.length; i < len; i++){
    strong = strongs[i]; //or strongs.item(i)
    strong.className = 'important';
}