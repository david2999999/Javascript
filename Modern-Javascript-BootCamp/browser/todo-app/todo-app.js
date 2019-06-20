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

// const paragraphs = document.querySelectorAll('p');
//
// paragraphs.forEach(function (p) {
//    if (p.textContent.includes('the')){
//        p.remove();
//    }
// });

// listen for new todo creation
// document.querySelector('#add-todo').addEventListener('click', function () {
//    console.log('Add a new todo....');
// });

// Listen for todo text change
// document.querySelector('#new-todo-text').addEventListener('input', function (e) {
//    console.log(e.target.value);
// });

const filters = {
    searchText: '',
    hideCompleted: false
};

const renderTodos = function(todos, filters){
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

        return searchTextMatch && hideCompletedMatch;
    });

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed;
    });

    document.querySelector('#todos').innerHTML = '';

    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    document.querySelector('#todos').appendChild(summary);

    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p');
        p.textContent = todo.text;
        document.querySelector('#todos').appendChild(p);
    });
};

renderTodos(todos, filters);

document.querySelector('#search-text').addEventListener('input', function (e) {
   filters.searchText = e.target.value;
   renderTodos(todos, filters);
});


// form control

document.querySelector('#new-todo').addEventListener('submit', function (e) {
   e.preventDefault();
   todos.push({
       text: e.target.elements.text.value,
       completed: false
   });

   renderTodos(todos, filters);
   e.target.elements.text.value = '';
});

// checkbox
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters)
});