// HTML5 allows elements to be specifi ed with nonstandard attributes prefi xed with data- in order
// to provide information that isn’t necessary to the rendering or semantic value of the element. These
// attributes can be added as desired and named anything, provided that the name begins with data-.
// Here is an example:
    // <div id='myDiv' data-appId='12345' data-myname='Nicholas'></div>
//the methods used in this example are for illustrative purposes only
var div = document.getElementById('myDiv');
//get the values
var appId = div.dataset.appId;

var myName = div.dataset.myname;
//set the value
div.dataset.appId = 23456;
div.dataset.myname = 'Michael';
//is there a 'myname' value?
if (div.dataset.myname){
    alert('Hello, ' + div.dataset.myname);
}