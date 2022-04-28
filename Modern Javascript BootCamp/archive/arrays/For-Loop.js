const notes = [
    'Note 1', 'Note 2', 'Note 3'
];

for(let count = 0; count <=2 ; count++) {
    console.log(count);
}

for (let count = 0; count < notes.length; count++) {
    console.log(notes[count]);
}

for (let count = notes.length - 1; count >= 0; count--){
    console.log(notes[count]);
}

const todos = [
    'Order cat food', 'Clean Kitchen', 'Buy food', 'Do work', 'Exercise'
];

for (let count = 0; count < todos.length; count++) {
    console.log(`${count + 1}. ${todos[count]}`);
}