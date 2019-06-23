Infinity // A read/write variable initialized to Infinity.
Number.POSITIVE_INFINITY // Same value, read-only.
1/0 // This is also the same value.
Number.MAX_VALUE + 1 // This also evaluates to Infinity.
Number.NEGATIVE_INFINITY // These expressions are negative infinity.

-Infinity
-1/0
-Number.MAX_VALUE - 1
NaN // A read/write variable initialized to NaN.
Number.NaN // A read-only property holding the same value.
0/0 // Evaluates to NaN.

Number.MIN_VALUE/2 // Underflow: evaluates to 0
-Number.MIN_VALUE/2 // Negative zero
-1/Infinity // Also negative 0
-0