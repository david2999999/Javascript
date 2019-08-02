var divs = document.getElementsByTagName('div'),
    i,
    div;

for (i=0; i < divs.length; i++){
    div = document.createElement('div');
    document.body.appendChild(div);
}

// The fi rst part of this code gets an HTMLCollection of all <div> elements in the document. Since that
// collection is 'live,' any time a new <div> element is added to the page, it gets added into the collection.
// Since the browser doesn’t want to keep a list of all the collections that were created, the collection is
// updated only when it is accessed again. This creates an interesting problem in terms of a loop such
// as the one in this example. Each time through the loop, the condition i < divs.length is being
// evaluated. That means the query to get all <div> elements is being run. Because the body of the loop
// creates a new <div> element and adds it to the document, the value of divs.length increments each
// time through the loop; thus i will never equal divs.length since both are being incremented.

var divs = document.getElementsByTagName('div'),
    i,
    len,
    div;

for (i=0, len=divs.length; i < len; i++){
    div = document.createElement('div');
    document.body.appendChild(div);
}