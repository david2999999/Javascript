let name = 'vikram';
let age = 12;

console.log(`hey, my name is ${name}! and i am ${age} years old`);


let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name}, Score: ${score}`;
    // return 'Name: ' + name + ' Score: ' + score;
};

let result2 = getScoreText();
console.log(result2);

//challenge
let getTip = function (total, tipPercent = .2) {
    let percent = tipPercent * 100;
    let tip = total * tipPercent;
    return `A ${percent}% tip on $${total} would be $${tip}`;
};
// total, tip Percent .2
let tip = getTip(100, .25);
console.log(tip);