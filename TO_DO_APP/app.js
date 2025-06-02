let todo = [];
let completed = [];
let taskInput = document.getElementById("task-input");
let priorityInput = document.getElementById("priority-select");
let addTaskButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", (event) => {
    event.stopPropagation();
    let task = taskInput.value;
    let priority = priorityInput.value;

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";

    checkbox.addEventListener("change", (event) => {
        if (event.target.checked) {
            li.style.textDecoration = "line-through";
            completed.push(task);
            console.log(`Completed: ${task}`);
            console.log("Completed list:", completed);
        } else {
            li.style.textDecoration = "none";
            completed = completed.filter(t => t !== task);
            console.log(`Unmarked: ${task}`);
        }
    });

    li.textContent = " " + task;
    li.className = "task-item";
    li.prepend(checkbox);
    taskList.appendChild(li);

    todo.push({ task: task, priority: priority });
    console.log("Todo list:", todo);

    taskInput.value = "";
});


let searchbox = document.getElementsByClassName("search-box")[0];

searchbox.addEventListener("input", (event) => {
    let searchItem = event.target.value.toLowerCase();
    let items = document.querySelectorAll(".task-item");

    items.forEach((item) => {
        if (item.textContent.toLowerCase().includes(searchItem)) {
            item.style.display = "list-item";
        } else {
            item.style.display = "none";
        }
    });
});

