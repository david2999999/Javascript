// The most commonly used and widely accepted form of client detection is called capability
// detection. Capability detection (also called feature detection) aims not to identify a specifi c
// browser being used but rather to identify the browser’s capabilities. This approach presumes
// that specifi c browser knowledge is unnecessary and that the solution may be found by determining
// if the capability in question actually exists. The basic pattern for capability detection is as follows:

if (object.propertyInQuestion){
    //use object.propertyInQuestion
}

// For example, the DOM method document.getElementById() didn’t exist in Internet Explorer
// prior to version 5. This method simply didn’t exist in earlier versions, although the same
// functionality could be achieved using the nonstandard document.all property. This led to a
// capability detection fork such as the following:
function getElement(id){
    if (document.getElementById){
        return document.getElementById(id);
    } else if (document.all){
        return document.all[id];
    } else {
        throw new Error('No way to retrieve element!');
    }
}