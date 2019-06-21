// Another method for fi nding patterns is search(). The only argument for this method is the same as
// the argument for match(): a regular expression specifi ed by either a string or a RegExp object. The
// search() method returns the index of the fi rst pattern occurrence in the string or –1 if it’s not
// found. search() always begins looking for the pattern at the beginning of the string. Consider this
// example:
var text = “cat, bat, sat, fat”;
var pos = text.search(/at/);
alert(pos); //1