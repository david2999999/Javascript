const notes = [{
    title: 'My Next Trip',
    body: 'I would like to go to Spain'
},{
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office Modification',
    body: 'Get a new seat'
}];

const findNotes = function (notes, query) {
    const filteredNotes = notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query);
        const isBodyMatch = note.body.toLowerCase().includes(query);

        return isTitleMatch || isBodyMatch;
    });

    return filteredNotes;
};

const note = findNotes(notes, 'eating');
console.log(note);

// challenge
const todos = [{
    text: 'Order cat food',
    completed: true
},{
    text: 'Clean Kitchen',
    completed: false
},{
    text: 'Buy food',
    completed: true
},{
    text: 'Do work',
    completed: false
},{
    text: 'Exercise',
    completed: true
}];

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed;
    });
};

console.log(getThingsToDo(todos));