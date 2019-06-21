// The "load" event occurs when a document is fully loaded. Usually we
// need to wait for this event before we start running our JavaScript code.
window.onload = function() { // Run this function when the document loads
    // Find all <img> tags in the document
    var images = document.getElementsByTagName("img");
    // Loop through them, adding an event handler for "click" events to each
    // so that clicking on the image hides it.
    for(var i = 0; i < images.length; i++) {
        var image = images[i];
        if (image.addEventListener) // Another way to register a handler
            image.addEventListener("click", hide, false);
        else // For compatibility with IE8 and before
            image.attachEvent("onclick", hide);
    }
    // This is the event handler function registered above
    function hide(event) { event.target.style.visibility = "hidden"; }
};