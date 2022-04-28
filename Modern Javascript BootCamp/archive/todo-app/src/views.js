import {getTodos, toggleTodo, removeTodo} from "./todos";
import {getFilters} from "./filters";

const renderTodos = () => {
    const todoEl = document.querySelector('#todos');
    const {searchText, hideCompleted} = getFilters();
    const filteredTodos = getTodos().filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(searchText.toLowerCase());
        const hideCompletedMatch = !hideCompleted || !todo.completed;
        return searchTextMatch && hideCompletedMatch;
    });

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);


    todoEl.innerHTML = '';
    todoEl.appendChild(generateSummaryDOM(incompleteTodos));

    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo));
        });
    } else {
        const messageEl = document.createElement('p');
        messageEl.classList.add('empty-message');
        messageEl.textContent = 'No To-Do to Show';
        todoEl.appendChild(messageEl);
    }
};

const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label');
    const containerEl = document.createElement('label');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');

    // set up the check box
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.completed;
    containerEl.appendChild(checkbox);

    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id);
        renderTodos();
    });

    // set up the todo text
    todoText.textContent = todo.text;
    containerEl.appendChild(todoText);

    // set up container
    todoEl.classList.add('list-item');
    containerEl.classList.add('list-item__container');
    todoEl.appendChild(containerEl);

    // set up the remove button
    removeButton.textContent = 'remove';
    removeButton.classList.add('button', 'button--text');
    todoEl.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id);
        renderTodos();
    });

    return todoEl;
};

const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2');
    const plural = incompleteTodos.length === 1 ? '' : 's';
    summary.classList.add('list-title');
    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`;
    return summary;
};

export {generateSummaryDOM, renderTodos, generateTodoDOM}