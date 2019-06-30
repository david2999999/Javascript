// The || operator performs the Boolean OR operation on its two operands. If one or both
// operands is truthy, it returns a truthy value. If both operands are falsy, it returns a falsy
// value.

//Although the || operator is most often used simply as a Boolean OR operator, it, like
// the && operator, has more complex behavior. It starts by evaluating its first operand,
// the expression on its left. If the value of this first operand is truthy, it returns that truthy
// value. Otherwise, it evaluates its second operand, the expression on its right, and returns
// the value of that expression.

// If max_width is defined, use that. Otherwise look for a value in
// the preferences object. If that is not defined use a hard-coded constant.
var max = max_width || preferences.max_width || 500;

//This idiom is often used in function bodies to supply default values for parameters:
// Copy the properties of o to p, and return p
function copy(o, p) {
    p = p || {}; // If no object passed for p, use a newly created object.
// function body goes here
}