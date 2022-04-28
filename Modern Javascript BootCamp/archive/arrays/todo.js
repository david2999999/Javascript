// create an array with 5 todos
// you have x todos
// print the first and second to last item

const todos = [
    'Order cat food', 'Clean Kitchen', 'Buy food', 'Do work', 'Exercise'
];

console.log(`You have ${todos.length} todos!`);
console.log(`Todo: ${todos[0]}`);
console.log(`Todo: ${todos[todos.length - 2]}`);

// delete the third item
// add a new item onto the end
// remove the first item from the list
todos.splice(2, 1);
todos.push('Buy Coffee');
todos.shift();

console.log(todos);
