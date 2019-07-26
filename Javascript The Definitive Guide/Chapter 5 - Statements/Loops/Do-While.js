// The do/while loop is less commonly used than its while cousin—in practice, it is somewhat
// uncommon to be certain that you want a loop to execute at least once. Here’s an
// example of a do/while loop:

function printArray(a) {
    var len = a.length, i = 0;
    if (len == 0)
        console.log("Empty Array");
    else {
        do {
            console.log(a[i]);
        } while (++i < len);
    }
}

// There are a couple of syntactic differences between the do/while loop and the ordinary
// while loop. First, the do loop requires both the do keyword (to mark the beginning of
// the loop) and the while keyword (to mark the end and introduce the loop condition).
// Also, the do loop must always be terminated with a semicolon. The while loop doesn’t
// need a semicolon if the loop body is enclosed in curly braces.