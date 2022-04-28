const notes = [{},{
    title: 'My Next Trip',
    body: 'I would like to go to Spain'
},{
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office Modification',
    body: 'Get a new seat'
}];

console.log(notes.indexOf({}));

const index = notes.findIndex(function (note, index) {
    console.log(note);
    return note.title === "Habits to work on"; 
});

console.log(index);
