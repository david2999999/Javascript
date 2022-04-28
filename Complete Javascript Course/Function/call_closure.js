function bind(fn, thisArg) {
    var outerArgs = [].slice.call(arguments, 2);
    return function () {
        var innerArgs = [].slice.call(arguments);
        var allArgs = outerArgs.concat(innerArgs);
        return fn.apply(thisArg, allArgs);
    }
}


function flip(fn, thisArg) {
    var outerArgs = [].slice.call(arguments, 2);
    return function () {
        var innerArgs = [].slice.call(arguments);
        var allArgs = outerArgs.concat(innerArgs).slice(0, fn.length);
        return fn.apply(thisArg, allArgs.reverse());
    }
}