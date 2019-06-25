// Simply testing for the existence of a property doesn’t defi nitively indicate that the object in question
// is sortable. The better approach is to check that sort is actually a function:
//Better – checks if sort is a function
function isSortable(object){
    return typeof object.sort == 'function';
}

// The typeof operator is used in this code to determine that sort is actually a function and therefore
// can be called to sort the data contained within.
//
// Capability detection using typeof is preferred whenever possible, but it is not infallible. In
// particular, host objects are under no obligation to return rational values for typeof. The most
// egregious example of this occurs with Internet Explorer. In most browsers, the following code
// returns true if document.createElement() is present:
//doesn’t work properly in Internet Explorer <= 8
function hasCreateElement(){
    return typeof document.createElement == 'function';
}