// <form method=”post” id=”myForm”>
    // <ul>
        // <li><input type=”radio” name=”color” value=”red”>Red</li>
        // <li><input type=”radio” name=”color” value=”green”>Green</li>
        // <li><input type=”radio” name=”color” value=”blue”>Blue</li>
    // </ul>
// </form>

// The form in this HTML has three radio controls that have “color” as their name, which ties the fi elds
// together. When accessing elements[“color”], a NodeList is returned, containing all three elements;
// when accessing elements[0], however, only the first element is returned
var form = document.getElementById('myForm');
var colorFields = form.elements['color'];

alert(colorFields.length); //3

var firstColorField = colorFields[0];
var firstFormField = form.elements[0];
alert(firstColorField === firstFormField); //true
