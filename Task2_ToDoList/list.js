const taskInput = document.getElementById("taskInput");
const categoryInput = document.getElementById("category");
const deadlineInput = document.getElementById("deadline");
const priorityInput = document.getElementById("priority");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList").getElementsByTagName("tbody")[0];

addTaskBtn.addEventListener("click", addTask);

taskList.addEventListener("click", function(event) {
    if (event.target && event.target.classList.contains("delete")) {
        deleteTask(event);
    } else if (event.target && event.target.classList.contains("edit")) {
        editTask(event);
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    const category = categoryInput.value;
    const deadline = deadlineInput.value;
    const priority = priorityInput.value;

    if (taskText !== "") {
        const newRow = taskList.insertRow(taskList.rows.length);
        const cellTask = newRow.insertCell(0);
        const cellCategory = newRow.insertCell(1);
        const cellDeadline = newRow.insertCell(2);
        const cellPriority = newRow.insertCell(3);
        const cellActions = newRow.insertCell(4);

        cellTask.textContent = taskText;
        cellCategory.textContent = category;
        cellDeadline.textContent = deadline;
        cellPriority.textContent = priority;
        cellActions.innerHTML = `
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;

        clearInputs();
    }
}

function editTask(event) {
    const row = event.target.closest("tr");
    const taskTextElement = row.cells[0];
    const newTaskText = prompt("Edit task:", taskTextElement.textContent);

    if (newTaskText !== null) {
        taskTextElement.textContent = newTaskText;
    }
}

function deleteTask(event) {
    const row = event.target.closest("tr");
    taskList.deleteRow(row.rowIndex);
}

function clearInputs() {
    taskInput.value = "";
    categoryInput.value = "personal";
    deadlineInput.value = "";
    priorityInput.value = "low";
}
