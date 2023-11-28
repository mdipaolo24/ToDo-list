// JavaScript code for the todo list functionality
let taskList = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        taskList.push({ text: taskText, done: false });
        displayTasks();
        taskInput.value = '';
    }
}

function editTask(index) {
    const newText = prompt('Edit task:', taskList[index].text);
    if (newText !== null) {
        taskList[index].text = newText.trim();
        displayTasks();
    }
}

function toggleDone(index) {
    taskList[index].done = !taskList[index].done;
    displayTasks();
}

function deleteTask(index) {
    taskList.splice(index, 1);
    displayTasks();
}

function clearAllTasks() {
    taskList = [];
    displayTasks();
}

function displayTasks() {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';

    for (let i = 0; i < taskList.length; i++) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskList[i].done ? '✅' : '◻️'} ${taskList[i].text}</span>
            <button onclick="editTask(${i})">Edit</button>
            <button onclick="toggleDone(${i})">${taskList[i].done ? 'Undone' : 'Done'}</button>
            <button onclick="deleteTask(${i})">Delete</button>
        `;
        if (taskList[i].done) {
            taskItem.style.textDecoration = 'line-through';
        }
        taskListElement.appendChild(taskItem);
    }
}