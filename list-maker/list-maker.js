const todoList = [
    {
        name: 'make a JS project',
        dueDate: '2023-09-10'
    },
    {
        name: 'Make a coffee for yourself',
        dueDate: '2023-09-15'
    }
];

renderTodoList()

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { name, dueDate } = todoObject;
        const html = `
      <div class = "output-name">${name} </div>
      <div class = "output-dueDate">${dueDate}</div>
      <button class = "delete-button" onclick="
        todoList.splice(${i},1);
        renderTodoList();
        ">Delete</button>`;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodoList() {
    const inputElement = document.querySelector('.js-todo-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name,
        dueDate
    });

    inputElement.value = '';
    inputDueDate = '';

    renderTodoList()
}