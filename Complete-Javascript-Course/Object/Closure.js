function retirement(retirementAge) {
    var a = " years left until retirement";
    return function (yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge- age) + a);
    }
}

retirement(66)(1990);

function interviewQuestion(job) {
    return function (name) {
        if(job === "designer"){
            console.log(name + " ,can you explain what is UX?");
        }else if(job === "teacher"){
            console.log("what subject do you teach? " + name);
        }else{
            console.log("Hello " + name + ", what do you do?");
        }
    }
}

interviewQuestion("teacher")("Tim");

function specialMultiply(a , b){
    if (arguments.length === 1){
        return function(b){
            return a + b
        }
    }

    return a * b;
}

function guessGame(amount){
    var answer = Math.floor(Math.random() * 11);
    var guesses = 0;
    var completed = false;

    return function(){
        if (!completed){
            guesses++;
            if(guesses === answer){
                completed = true;
                return "You got it!";
            }
        }
        else if(guess > answer) return "Your guess is too high";
        else if(guess < answer) return "Your guess is too low";
        else if(guesses === amount){
            completed = true;
            return "No more guesses, the answer is " + answer;
        }
    }
}