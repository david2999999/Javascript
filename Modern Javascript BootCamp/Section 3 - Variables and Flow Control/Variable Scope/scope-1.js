// Global Scope - Defined outside of all code blocks
// Local Scope - Defined inside a code block

// in a scope you can access variables defined in that scope, or
// in any parent/ancestor scope

let varOne = 'varOne'; // Global Scope

if (true) {
    console.log(varOne);
    let varTwo = 'varTwo'; // Local Scope
    console.log(varTwo);

    if (true) {
        let varFour = 'varFour';
    }
}

console.log(varTwo);

if (true) {
    let varThree = 'varThree';
}