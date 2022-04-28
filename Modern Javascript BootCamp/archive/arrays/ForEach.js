const notes = [
    'Note 1', 'Note 2', 'Note 3'
];

notes.forEach(function (item, index) {
    console.log(index);
    console.log(item);
});

const todos = [
    'Order cat food', 'Clean Kitchen', 'Buy food', 'Do work', 'Exercise'
];

todos.forEach(function (item, index) {
    console.log(`${index + 1}. ${item}`);
});