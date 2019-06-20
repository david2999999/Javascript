'use strict'

const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');
    
    try {
        return todosJSON ? JSON.parse(todosJSON) : [];
    } catch (e) {
        return [];
    }

};

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

const renderTodos = (todos, filters) => {
    const todoEl = document.querySelector('#todos');

    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
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
       saveTodos(todos);
       renderTodos(todos, filters);
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
        saveTodos(todos);
        renderTodos(todos, filters);
    });


    return todoEl;
};

const removeTodo = (id) => {
    const todoIndex = todos.findIndex( (todo) => todo.id === id);

    if(todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
};

const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);

  if(todo) {
      todo.completed = !todo.completed;
  }
};


const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2');
    const plural = incompleteTodos.length === 1 ? '' : 's';
    summary.classList.add('list-title');
    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`;
    return summary;
};