const question = new Map();
question.set('question', 'what is the official name of the lastest version of JS');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct Answer');
question.set(false, 'Wrong answer');

console.log(question.get('question'));
console.log(question.size);

// if(question.has(4)){
//     question.delete(4);
// }

// deletes all of the elements
// question.clear();


// question.forEach((value, key) =>
//     console.log(`This is ${key}, and its set to ${value}`));
//
for(let [key, value] of question.entries()){
    if(typeof key === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Type in the correct answer'));

console.log(question.get(ans === question.get('correct')));






















