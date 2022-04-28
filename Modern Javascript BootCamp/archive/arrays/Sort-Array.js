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

const sortNotes = function (notes) {
  notes.sort(function (a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()){
          return -1
      }else if(b.title.toLowerCase() < a.title.toLowerCase()){
          return 1;
      }else {
          return 0;
      }
  });
};

sortNotes(notes);
console.log(notes);


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

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1;
        }else if (!b.completed && a.completed) {
            return 1;
        }else
            return 0;
    });
};

sortTodos(todos);
console.log(todos);
