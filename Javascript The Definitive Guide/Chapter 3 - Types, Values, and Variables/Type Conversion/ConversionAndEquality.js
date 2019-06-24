// Because JavaScript can convert values flexibly, its == equality operator is also flexible
// with its notion of equality. All of the following comparisons are true, for example:
null == undefined // These two values are treated as equal.
"0" == 0 // String converts to a number before comparing.
0 == false // Boolean converts to number before comparing.
"0" == false // Both operands convert to numbers before comparing.

// §4.9.1 explains exactly what conversions are performed by the == operator in order to
// determine whether two values should be considered equal, and it also describes the
// strict equality operator === that does not perform conversions when testing for equality.
// Keep in mind that convertibility of one value to another does not imply equality of
// those two values. If undefined is used where a boolean value is expected, for example,
// it will convert to false. But this does not mean that undefined == false. JavaScript
// operators and statements expect values of various types, and perform conversions to
// those types. The if statement converts undefined to false, but the == operator never
// attempts to convert its operands to booleans.