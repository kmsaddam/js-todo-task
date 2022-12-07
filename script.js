//console.log(`Test.........`);
/*
Project: TODO Task 
Technology: HTML, CSS, Vanila JS
Author: K M Saddam Hossain
Author Url: kmsaddam.com
*/

//DOM Initials
let form = document.querySelector("form");
let newTask = document.querySelector("#new-task");
let incompleteUI = document.querySelector(".incomplete-task");
let completeUI = document.querySelector(".complete-task");
let incompleteCheckbox = document.querySelector(".task-check");

//functions
let taskSubmit = (event) => {
  event.preventDefault();
  let taskList = addTask(newTask.value);
  incompleteUI.appendChild(taskList);
  newTask.value = "";
};

let addTask = (task) => {
  let list = document.createElement("li");
  list.className = "list-group-item";

  let checkbox = document.createElement("input");
  checkbox.className = "task-check";
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("change", incompleteToComplete(task));

  let label = document.createElement("label");
  label.textContent = task;

  list.appendChild(checkbox);
  list.appendChild(label);

  return list;
};

let completeTask = (task) => {
  let list = document.createElement("li");
  list.className = "list-group-item";

  let label = document.createElement("label");
  label.textContent = task;

  let btn = document.createElement("button");
  btn.className = "btn btn-danger";
  btn.textContent = "Delete";

  list.appendChild(label);
  list.appendChild(btn);

  return list;
};

let incompleteToComplete = (task) => {
  console.log(`ddd`);
  //   let doneTask = completeTask(task);
  //   completeUI.appendChild(doneTask);
};

// console.log(form);

//Event Listener
form.addEventListener("submit", taskSubmit);
// incompleteCheckbox.addEventListener("change", incomPletetoComplete);
