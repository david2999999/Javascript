var o = { x : 1 };
var p = null;
o && o.x // => 1: o is truthy, so return value of o.x
p && p.x // => null: p is falsy, so return it and don't evaluate p.x

if (a == b) stop(); // Invoke stop() only if a == b
(a == b) && stop(); // This does the same thing
