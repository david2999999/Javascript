// DOM - Document Object Model
// querySelector only selects the first p
const p = document.querySelector('p');
console.log(p);
// removing the p tag from html
// p.remove();

// query all p tags
const ps = document.querySelectorAll('p');

// remove all of the p tags
// ps.forEach(function (p) {
//     p.remove();
// });

// getting all of the text content of p tags
// ps.forEach(function (p) {
//     console.log(p.textContent);
// });

// changing the text value of all p tags
// ps.forEach(function (p) {
//     p.textContent = '***********';
// });

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


// add a new element below the last p tag
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is a new element from js';
// document.querySelector('body').appendChild(newParagraph);


document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked';
});

// document.querySelector('#remove-all').addEventListener('click', function () {
//     document.querySelectorAll('.note').forEach(function (note) {
//         note.remove();
//     });
// });


const filters = {
    searchText: ''
};

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
      return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach(function (note) {
      const noteEl = document.createElement('p');
      noteEl.textContent = note.title;
      document.querySelector('#notes').appendChild(noteEl);
  })
};

renderNotes(notes, filters);

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

// document.querySelector('#name-form').addEventListener('submit', function (e) {
//     e.preventDefault(); // prevent the default behavior of refreshing the page
//     console.log(e.target.elements.firstName.value);
// });

// document.querySelector('#for-fun').addEventListener('change', function (e) {
//    console.log(e.target.checked);
// });

document.querySelector('#filter-by').addEventListener('change', function (e) {
   console.log(e.target.value);
});