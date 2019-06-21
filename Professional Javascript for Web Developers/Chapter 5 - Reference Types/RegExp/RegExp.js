// ECMAScript supports regular expressions through the RegExp type. Regular expressions are easy
// to create using syntax similar to Perl, as shown here:

// var expression = /pattern/flags;

// The pattern part of the expression can be any simple or complicated regular expression, including
// character classes, quantifi ers, grouping, lookaheads, and backreferences. Each expression can have
// zero or more fl ags indicating how the expression should behave. Three supported fl ags represent
// matching modes, as follows:

// g — Indicates global mode, meaning the pattern will be applied to all of the string instead
// of stopping after the fi rst match is found.

// i — Indicates case-insensitive mode, meaning the case of the pattern and the string are
// ignored when determining matches.

// m — Indicates multiline mode, meaning the pattern will continue looking for matches after
// reaching the end of one line of text.

/*
* Match all instances of “at” in a string.
*/
var pattern1 = /at/g;

/*
* Match the first instance of “bat” or “cat”, regardless of case.
*/
var pattern2 = /[bc]at/i;
/*
* Match all three-character combinations ending with ”at”, regardless of case.
*/
var pattern3 = /.at/gi;