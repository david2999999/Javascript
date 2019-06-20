const todo = {
    id: 'asdqwdqwd123123',
    text: 'pay the bill',
    completed: false
};

const printTodo = ({ text, completed }) => {
    console.log(`${text}: ${completed}`);
}

const {text:todoText, completed, details = 'No Details Provided', ...others} = todo;

console.log(todoText);
console.log(completed);
console.log(details);
console.log(others);

const age = [65, 0 , 13, 21];
const [firstAge, secondAge, ...otherAges] = age;
console.log(firstAge);
console.log(secondAge);
console.log(otherAges);