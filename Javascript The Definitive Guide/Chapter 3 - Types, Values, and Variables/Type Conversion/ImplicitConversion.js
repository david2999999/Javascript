// Certain JavaScript operators perform implicit type conversions, and are sometimes
// used for the purposes of type conversion. If one operand of the + operator is a string,
//     it converts the other one to a string. The unary + operator converts its operand to a
// number. And the unary ! operator converts its operand to a boolean and negates it.
//     These facts lead to the following type conversion idioms that you may see in some code:
x + "" // Same as String(x)
+x // Same as Number(x). You may also see x-0
!!x // Same as Boolean(x). Note double !