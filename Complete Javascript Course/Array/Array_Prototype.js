var a = {"0":"a", "1":"b", "2":"c", length:3};  // An array-like object
Array.prototype.join.call(a, "+");               // => "a+b+c"
Array.prototype.slice.call(a, 0);                // => ["a","b","c"]: true array copy
Array.prototype.map.call(a, function(x) {
    return x.toUpperCase();
});                                               // => ["A","B","C"]: