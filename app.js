document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const taskText = taskInput.value.trim(); // Remove leading and trailing whitespace

        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = ''; // Clear input field after adding task
        }
    });

    // Function to add a new task
    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function () {
            li.remove();
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
});
