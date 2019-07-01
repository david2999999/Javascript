// The simplest kinds of statements in JavaScript are expressions that have side effects.
// (But see §5.7.3 for an important expression statement without side effects.) This sort
// of statement was shown in Chapter 4. Assignment statements are one major category
// of expression statements. For example:
greeting = "Hello " + name;
i *= 3;

// These client-side function calls are expressions, but they have side effects that affect
// the web browser and are used here as statements. If a function does not have any side
// effects, there is no sense in calling it, unless it is part of a larger expression or an assignment
// statement. For example, you wouldn’t just compute a cosine and discard
// the result:
Math.cos(x);

//But you might well compute the value and assign it to a variable for future use:
cx = Math.cos(x);