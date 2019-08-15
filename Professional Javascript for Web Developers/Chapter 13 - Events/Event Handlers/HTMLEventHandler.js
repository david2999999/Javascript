// <form method=”post”>
    // <input type=”text” name=”username” value=””>
    // <input type=”button” value=”Echo Username” onclick=”alert(username.value)”>
// </form>

//There are a few downsides to assigning event handlers in HTML. The fi rst is a timing issue:
// it’s possible that the HTML element appears on the page and is interacted with by the user before
// the event handler code is ready. In the previous example, imagine a scenario where the
// showMessage() function isn’t defined until later on the page, after the code for the button. If the
// user were to click the button before showMessage() was defined, an error would occur. For this
// reason, most HTML event handlers are enclosed in try-catch blocks so that they quietly fail,

// <input type=”button” value=”Click Me” onclick=”try{showMessage();}catch(ex){}”>

// If this button is clicked before the showMessage() function is defined, no JavaScript error occurs
// because the error is caught before the browser can handle it.