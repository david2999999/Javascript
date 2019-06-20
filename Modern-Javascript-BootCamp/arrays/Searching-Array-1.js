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

const findNote = function (notes, noteTitle) {
    return notes.find(function (note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
};

// const findNote = function (notes, noteTitle) {
//   const index = notes.findIndex(function (note) {
//      return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//
//   return notes[index];
// };

const note = findNote(notes, 'Office Modification');
console.log(note);