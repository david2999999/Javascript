// A third method, which is defi ned on the HTMLDocument type only, is getElementsByName().
// As its name suggests, this method returns all elements that have a given name attribute. The
// getElementsByName() method is most often used with radio buttons, all of which must have the
// same name to ensure the correct value gets sent to the server, as the following example shows:

// <fieldset>
    // <legend>Which color do you prefer?</legend>
    // <ul>
        // <li><input type='radio' value='red' name='color' id='colorRed'>
            // <label for='colorRed'>Red</label></li>
        // <li><input type='radio' value='green' name='color' id='colorGreen'>
            // <label for='colorGreen'>Green</label></li>
        // <li><input type='radio' value='blue' name='color' id='colorBlue'>
            // <label for='colorBlue'>Blue</label></li>
    // </ul>
// </fieldset>

// In this code, the radio buttons all have a name attribute of 'color' even though their IDs are
// different. The IDs allow the <label> elements to be applied to the radio buttons, and the name
// attribute ensures that only one of the three values will be sent to the server. These radio buttons can
// all then be retrieved using the following line of code:
var radios = document.getElementsByName('color');