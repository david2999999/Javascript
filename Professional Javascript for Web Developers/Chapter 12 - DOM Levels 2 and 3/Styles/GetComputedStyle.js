// <!DOCTYPE html>
// <html>
    // <head>
    // <title>Computed Styles Example</title>
        // <style type='text/css'>
            // #myDiv {
                // background-color: blue;
                // width: 100px;
                // height: 200px;
            // }
        // </style>
    // </head>
    // <body>
        // <div id='myDiv' style='background-color: red; border: 1px solid black'></div>
    // </body>
// </html>

var myDiv = document.getElementById('myDiv');
var computedStyle = document.defaultView.getComputedStyle(myDiv, null);
alert(computedStyle.backgroundColor); //'red'
alert(computedStyle.width); //'100px'
alert(computedStyle.height); //'200px'
alert(computedStyle.border); //'1px solid black' in some browsers