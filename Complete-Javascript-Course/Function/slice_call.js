function arrayFrom(arrayLikeObject) {
    return [].slice.call(arrayLikeObject);
}

function sumEvenArguments() {
    var newArgs = [].slice.call(arguments);
    return newArgs.reduce(function (acc, next) {
        if(next % 2 === 0){
            return acc + next;
        }

        return acc;
    }, 0);
}