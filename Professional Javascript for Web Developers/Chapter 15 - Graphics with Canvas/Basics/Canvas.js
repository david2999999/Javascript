// <canvas id='drawing' width='200' height='200'>A drawing of something.</canvas>

var drawing = document.getElementById('drawing');

//make sure <canvas> is completely supported
if (drawing.getContext){
    var context = drawing.getContext('2d');
    //more code here
}

// Images created on a <canvas> element can be exported using the toDataURL() method. This
// method accepts a single argument, the MIME type format of the image to produce, and is applicable
// regardless of the context used to create the image
var drawing = document.getElementById('drawing');

//make sure <canvas> is completely supported
if (drawing.getContext){
    //get data URI of the image
    var imgURI = drawing.toDataURL('image/png');
    //display the image
    var image = document.createElement('img');
    image.src = imgURI;
    document.body.appendChild(image);
}