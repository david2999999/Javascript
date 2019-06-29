// The && operator can be understood at three different levels. At the simplest level, when
// used with boolean operands, && performs the Boolean AND operation on the two values:
//     it returns true if and only if both its first operand and its second operand are
// true. If one or both of these operands is false, it returns false.
// && is often used as a conjunction to join two relational expressions:
x == 0 && y == 0 // true if, and only if x and y are both 0

// Notice that the description above says that the operator returns “a truthy value” or “a
// falsy value,” but does not specify what that value is. For that, we need to describe &&
// at the third and final level. This operator starts by evaluating its first operand, the
// expression on its left. If the value on the left is falsy, the value of the entire expression
// must also be falsy, so && simply returns the value on the left and does not even evaluate
// the expression on the right.

// On the other hand, if the value on the left is truthy, then the overall value of the expression
// depends on the value on the right-hand side. If the value on the right is truthy,
// then the overall value must be truthy, and if the value on the right is falsy, then the
// overall value must be falsy. So when the value on the left is truthy, the && operator
// evaluates and returns the value on the right:
var o = { x : 1 };
var p = null;
o && o.x // => 1: o is truthy, so return value of o.x
p && p.x // => null: p is falsy, so return it and don't evaluate p.x