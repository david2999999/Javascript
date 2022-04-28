// multiple arguments
let add = function (a, b, c) {
    return a + b + c;
};


let result = add(10, 1, 5);
console.log(result);

//default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' Score: ' + score;
};

let result2 = getScoreText();
console.log(result2);

//challenge
let getTip = function (total, tipPercent = .2) {
    return total * tipPercent;
};
// total, tip Percent .2
let tip = getTip(100, .25);
console.log(tip);