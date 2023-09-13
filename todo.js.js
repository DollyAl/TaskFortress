document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value;
        if (taskText.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <input type="checkbox">
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;

            taskList.appendChild(listItem);

            taskInput.value = '';

            // Add event listener for task deletion
            const deleteButton = listItem.querySelector('.delete');
            deleteButton.addEventListener('click', function () {
                listItem.remove();
            });
        }
    });
});
