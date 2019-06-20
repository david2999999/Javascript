// As with regular expressions in other languages, all metacharacters must be escaped when used as
// part of the pattern. The metacharacters are as follows:

// ( [ { \ ^ $ | ) ] } ? * + .

// Each metacharacter has one or more uses in regular-expression syntax and so must be escaped by a
// backslash when you want to match the character in a string.

/*
* Match the first instance of “bat” or “cat”, regardless of case.
*/
var pattern1 = /[bc]at/i;

/*
* Match the first instance of ”[bc]at”, regardless of case.
*/
var pattern2 = /\[bc\]at/i;

/*
* Match all three-character combinations ending with ”at”, regardless of case.
*/
var pattern3 = /.at/gi;

/*
* Match all instances of ”.at”, regardless of case.
*/
var pattern4 = /\.at/gi;