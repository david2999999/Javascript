// The exec() method returns information about one match at a time even if the pattern is global.
// When the global fl ag is not specifi ed, calling exec() on the same string multiple times will always
// return information about the fi rst match. With the g fl ag set on the pattern, each call to exec()
// moves further into the string looking for matches, as in this example:

var text = “cat, bat, sat, fat”;
var pattern1 = /.at/;
var matches = pattern1.exec(text);
alert(matches.index); //0
alert(matches[0]); //cat
alert(pattern1.lastIndex); //0
matches = pattern1.exec(text);
alert(matches.index); //0
alert(matches[0]); //cat
alert(pattern1.lastIndex); //0
var pattern2 = /.at/g;
var matches = pattern2.exec(text);

alert(matches.index); //0
alert(matches[0]); //cat
alert(pattern2.lastIndex); //0
matches = pattern2.exec(text);
alert(matches.index); //5
alert(matches[0]); //bat
alert(pattern2.lastIndex); //8