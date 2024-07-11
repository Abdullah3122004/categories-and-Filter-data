let tasks = [];

function addTask() {
    const taskName = document.getElementById('taskName').value;
    const dueDate = document.getElementById('dueDate').value;
    const category = document.getElementById('category').value;

    if (taskName && dueDate && category) {
        tasks.push({ taskName, dueDate, category });
        displayTasks(tasks);
        document.getElementById('taskName').value = '';
        document.getElementById('dueDate').value = '';
        document.getElementById('category').value = 'Homework';
    }
}

function displayTasks(taskArray) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    taskArray.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="task-details">
                <strong>${task.taskName}</strong>
                <span>${task.dueDate}</span>
                <span class="task-category">${task.category}</span>
            </div>
            <button onclick="removeTask('${task.taskName}')">Remove</button>
        `;
        taskList.appendChild(li);
    });
}

function filterTasks() {
    const filterCategory = document.getElementById('filterCategory').value;

    if (filterCategory === 'All') {
        displayTasks(tasks);
    } else {
        const filteredTasks = tasks.filter(task => task.category === filterCategory);
        displayTasks(filteredTasks);
    }
}

function removeTask(taskName) {
    tasks = tasks.filter(task => task.taskName !== taskName);
    filterTasks();
}
