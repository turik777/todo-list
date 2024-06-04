import "./style.css";
import { projectList, addProject, addTodo } from "./addTodo";
import { createProjectDOM, contentTitle } from "./createProject";
import { createTodoDOM } from "./createTodo";

const todosButton = document.getElementById("todos-button");

const showProjectDialog = document.querySelector(".projects button");
const projectDialog = document.querySelector(".new-project");
const addProjectButton = document.querySelector(".new-project > input");
const projectTitle = document.getElementById("project-title");
const title = document.getElementById("title");

const showTodoDialog = document.querySelector(".content button");
const todoDialog = document.querySelector(".new-todo");
const addTodoButton = document.querySelector(".new-todo > input");
const todoTitle = document.getElementById("todo-name");
const todoDescription = document.getElementById("todo-description");
const todoDate = document.getElementById("todo-date");
const todoPriority = document.getElementById("todo-priority");

todosButton.addEventListener("click", () => {
    createTodoDOM("All todos");
    contentTitle.textContent = "All todos";
});

showProjectDialog.addEventListener("click", () => {
    projectDialog.style.display = "block";
})

addProjectButton.addEventListener("click", () => {
    addProject(projectTitle.value);
    createProjectDOM();
    projectDialog.style.display = "none";
    projectTitle.value = "";
})

showTodoDialog.addEventListener("click", () => {
    todoDialog.style.display = "block";
})

addTodoButton.addEventListener("click", () => {
    addTodo(todoTitle.value, todoDescription.value, todoDate.value, todoPriority.value, title.textContent);
    createTodoDOM(title.textContent);
    todoDialog.style.display = "none";
    todoTitle.value = "";
    todoDescription.value = "";
    todoDate.value = "";
    todoPriority.value = "";
})

console.log(projectList);