let name = 'Jen';
let age = 20;

console.log(`Hey, my name is ${name}! I am ${age} years old`);

let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
};

console.log(getScoreText('Andrew', 100));
console.log(getScoreText(undefined, 99));

let getTip = function (total, tipPercent = .2) {
    let percent = tipPercent * 100;
    let tip = tipPercent * total;
    return `A ${percent}% on $${total} would be $${tip}`
};

let tip = getTip(100, .25);
console.log(tip);
