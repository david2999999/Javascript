// The String type has several methods designed to pattern-match within the string. The fi rst of these
// methods is match() and is essentially the same as calling a RegExp object’s exec() method. The
// match() method accepts a single argument, which is either a regular-expression string or a RegExp
// object.
var text = “cat, bat, sat, fat”;
var pattern = /.at/;

//same as pattern.exec(text)
var matches = text.match(pattern);
alert(matches.index); //0
alert(matches[0]); //”cat”
alert(pattern.lastIndex); //0