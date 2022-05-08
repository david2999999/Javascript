// Multiple Arguments
let add = function (a, b, c) {
    return a + b + c;
};

let result = add(10, 1, 5);

console.log(result);

// Default Arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score;
};

console.log(getScoreText('Andrew', 100));
console.log(getScoreText(undefined, 99));

// Challenge Area
// total, tipPercent .2

let getTip = function (total, tipPercent = .2) {
    return total * tipPercent;
};

let tip = getTip(100, .25);
console.log(tip);
