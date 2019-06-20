const notes = [
  'Note 1', 'Note 2', 'Note 3'
];

console.log(notes.pop());
notes.push('My new Notes');

console.log(notes.shift());
notes.unshift('My first note');

notes.splice(1,1, 'This is the new second item');

notes[2] = 'This is now the new note 3';




console.log(notes);
console.log(notes[0]);
console.log(notes[2]);
console.log(notes[3]);
console.log(notes[notes.length - 1]);


