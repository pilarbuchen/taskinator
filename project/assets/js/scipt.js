var formE1 = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function (event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    createTaskE1(taskDataObj); 
};

var createTaskE1 = function (taskDataObj) {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    var taskInfoE1 = document.createElement("div");
    taskInfoE1.className = "task-info";
    taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    listItemEl.appendChild(taskInfoE1)
    tasksToDoEl.appendChild(listItemEl);
}

formE1.addEventListener("submit", taskFormHandler);