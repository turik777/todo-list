import "./style.css";
import { addProject, addTodo } from "./js/addTodo";
import { createProjectDOM, contentTitle } from "./js/createProject";
import { createTodoDOM } from "./js/createTodo";
import { saveContent } from "./js/localStorage";

const todosButton = document.getElementById("todos-button");

const showProjectDialog = document.querySelector(".projects button");
const projectDialog = document.querySelector(".new-project");
const addProjectButton = document.querySelector(".new-project div:last-of-type > input");
const closeProjectDialog = document.querySelector(".new-project div:last-of-type > input:last-of-type");
const projectTitle = document.getElementById("project-title");
const title = document.getElementById("title");

const showTodoDialog = document.querySelector(".add-todo");
const todoDialog = document.querySelector(".new-todo");
const addTodoButton = document.querySelector(".new-todo div:last-of-type > input");
const closeTodoDialog = document.querySelector(".new-todo div:last-of-type > input:last-of-type")
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
    saveContent();
})

closeProjectDialog.addEventListener("click", () => 
    projectDialog.style.display = "none"
);

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
    saveContent();
})

closeTodoDialog.addEventListener("click", () => 
    todoDialog.style.display = "none"
);