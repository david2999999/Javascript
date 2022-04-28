function equalArrays(a,b) {
    if (a.length != b.length) return false; // Different-size arrays not equal

    for(var i = 0; i < a.length; i++) // Loop through all elements
        if (a[i] !== b[i]) return false; // If any differ, arrays not equal

    return true; // Otherwise they are equal
}
