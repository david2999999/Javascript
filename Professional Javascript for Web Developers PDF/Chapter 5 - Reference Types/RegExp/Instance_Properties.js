// Each instance of RegExp has the following properties that allow you to get information about
// the pattern:
// global — A Boolean value indicating whether the g fl ag has been set.

// ignoreCase — A Boolean value indicating whether the i fl ag has been set.

// lastIndex — An integer indicating the character position where the next match will be
                // attempted in the source string. This value always begins as 0.

// multiline — A Boolean value indicating whether the m fl ag has been set.

// source — The string source of the regular expression. This is always returned as if specified
            // in literal form (without opening and closing slashes) rather than a string pattern as passed
            // into the constructor.

var pattern1 = /\[bc\]at/i;
alert(pattern1.global); //false
alert(pattern1.ignoreCase); //true
alert(pattern1.multiline); //false
alert(pattern1.lastIndex); //0
alert(pattern1.source); //”\[bc\]at”

var pattern2 = new RegExp("\\[bc\\]at", "i");
alert(pattern2.global); //false
alert(pattern2.ignoreCase); //true
alert(pattern2.multiline); //false
alert(pattern2.lastIndex); //0
alert(pattern2.source); //”\[bc\]at”