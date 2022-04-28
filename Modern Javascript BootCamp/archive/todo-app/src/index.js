import {renderTodos} from "./views";
import {setFilters} from "./filters";
import {createTodo, loadTodos} from "./todos";

renderTodos();

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    });
    renderTodos();
});


// form control
document.querySelector('#new-todo').addEventListener('submit', (e) => {
    const text = e.target.elements.text.value.trim();
    e.preventDefault();

    if (text.length) {
        createTodo(text);
        renderTodos();
        e.target.elements.text.value = '';
    }
});

// checkbox
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    });
    renderTodos();
});

window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos();
        renderTodos();
    }
})