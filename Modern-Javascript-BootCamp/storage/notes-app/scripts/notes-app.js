'use strict'

let notes = getSavedNotes();

const filters = {
    searchText: '',
    sortBy: 'byEdited'
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = uuidv4();
    const timestamp = moment().valueOf();
    notes.push({
        id: id,
        title : '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    });

    saveNotes(notes);
    // renderNotes(notes, filters);
    location.assign(`/edit.html#${id}`);
});


document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
});

window.addEventListener('storage', (e) => {
    if(e.key === 'notes') {
        notes = JSON.parse(e.newValue());
        renderNotes(notes, filters);
    }
});



// localStorage.setItem('location', 'new york');
// console.log(localStorage.getItem('location'));
// localStorage.removeItem('location');
// localStorage.clear();

// const user = {
//     name: 'Andrew',
//     age: 27
// };

// const userJSON = JSON.stringify(user);
// console.log(userJSON);
// localStorage.setItem('user', userJSON);

// const userJSON = localStorage.getItem('user');
// const user = JSON.parse(userJSON);
// console.log(`${user.name} is ${user.age}`);


// const now = moment();
// now.subtract(1, 'week').subtract(20, 'days');
// console.log(now.toString());
// console.log(now.format('MMMM Do YYYY'))
// // now.minute(1);
// // console.log(now.minute());
//
// console.log(now.fromNow());
//
// const nowTimestamp = now.valueOf();
// console.log(nowTimestamp);
//
// console.log(moment(nowTimestamp).fromNow());

// const birthday = moment();
// birthday.year(1996).month(9).date(14);
// console.log(birthday.format('MMM D, YYYY'));
