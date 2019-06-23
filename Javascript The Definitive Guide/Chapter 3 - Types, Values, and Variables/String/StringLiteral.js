// JavaScript uses the UTF-16 encoding of the Unicode character set, and JavaScript
// strings are sequences of unsigned 16-bit values. The most commonly used Unicode
// characters (those from the “basic multilingual plane”) have codepoints that fit in
// 16 bits and can be represented by a single element of a string. Unicode characters whose
// codepoints do not fit in 16 bits are encoded following the rules of UTF-16 as a sequence
// (known as a “surrogate pair”) of two 16-bit values. This means that a JavaScript string
// of length 2 (two 16-bit values) might represent only a single Unicode character:
var p = "π"; // π is 1 character with 16-bit codepoint 0x03c0
var e = "e"; // e is 1 character with 17-bit codepoint 0x1d452
p.length // => 1: p consists of 1 16-bit element
e.length // => 2: UTF-16 encoding of e is 2 16-bit values: "\ud835\udc52"

// The various string-manipulation methods defined by JavaScript operate on 16-bit values,
//     not on characters. They do not treat surrogate pairs specially, perform no normalization
// of the string, and do not even ensure that a string is well-formed UTF-16.

"" // The empty string: it has zero characters
'testing'
"3.14"
'name="myform"'
"Wouldn't you prefer O'Reilly's book?"
"This string\nhas two lines"
"π is the ratio of a circle's circumference to its diameter"