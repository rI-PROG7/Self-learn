const todoInput = document.getElementById('todo-input')
const taskbtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let task = []
taskbtn.addEventListener('click', ()=> {
    const taskTest = todoInput.value.trim();
    if(taskTest === "") return;


})
