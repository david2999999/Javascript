// The getElementsByTagName() method is another commonly used method for retrieving element
// references. It accepts a single argument — the tag name of the elements to retrieve — and returns
// a NodeList containing zero or more elements. In HTML documents, this method returns an
// HTMLCollection object, which is very similar to a NodeList in that it is considered a 'live'
// collection. For example, the following code retrieves all <img> elements in the page and returns an
// HTMLCollection:
var images = document.getElementsByTagName('img');

//This code stores an HTMLCollection object in the images variable. As with NodeList objects, items
// in HTMLCollection objects can be accessed using bracket notation or the item() method. The number
// of elements in the object can be retrieved via the length property, as this example demonstrates:
alert(images.length); //output the number of images
alert(images[0].src); //output the src attribute of the first image
alert(images.item(0).src); //output the src attribute of the first image

// The HTMLCollection object has an additional method, namedItem(), that lets you reference an
// item in the collection via its name attribute. For example, suppose you had the following <img>
// element in a page:

    // <img src='myimage.gif' name='myImage'>

// A reference to this <img> element can be retrieved from the images variable like this:
var myImage = images.namedItem('myImage');
var myImage = images['myImage'];

// To retrieve all elements in the document, pass in '*' to getElementsByTagName(). The asterisk
// is generally understood to mean 'all' in JavaScript and Cascading Style Sheets (CSS). Here’s an
// example
var allElements = document.getElementsByTagName('*');