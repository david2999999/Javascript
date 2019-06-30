// The ! operator is a unary operator; it is placed before a single operand. Its purpose is
// to invert the boolean value of its operand. For example, if x is truthy !x evaluates to
// false. If x is falsy, then !x is true.

// As a unary operator, ! has high precedence and binds tightly. If you want to invert the
// value of an expression like p && q, you need to use parentheses: !(p && q). It is worth
// noting two theorems of Boolean algebra here that we can express using JavaScript
// syntax:
// These two equalities hold for any values of p and q
!(p && q) === !p || !q
!(p || q) === !p && !q