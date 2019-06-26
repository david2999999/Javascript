// Both the + operator and the comparison operators behave differently for numeric and
// string operands. + favors strings: it performs concatenation if either operand is a string.
// The comparison operators favor numbers and only perform string comparison if both
//  operands are strings:
1 + 2 // Addition. Result is 3.
"1" + "2" // Concatenation. Result is "12".
"1" + 2 // Concatenation. 2 is converted to "2". Result is "12".
11 < 3 // Numeric comparison. Result is false.
"11" < "3" // String comparison. Result is true.
"11" < 3 // Numeric comparison. "11" converted to 11. Result is false.
"one" < 3 // Numeric comparison. "one" converted to NaN. Result is false.