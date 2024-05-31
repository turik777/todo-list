import "./style.css";
import { addProject } from "./addTodo";

const showProjectDialog = document.querySelector(".projects button");
const projectDialog = document.querySelector(".new-project");
const addProjectButton = document.querySelector(".new-project > input");
const projectTitle = document.getElementById("project-title");

const showTodoDialog = document.querySelector(".content button");
const todoDialog = document.querySelector(".new-todo");
const addTodoButton = document.querySelector(".new-todo > input");

showProjectDialog.addEventListener("click", () => {
    projectDialog.style.display = "block";
})

addProjectButton.addEventListener("click", () => {
    addProject(projectTitle.value);
    projectDialog.style.display = "none";
    projectTitle.value = "";
})

showTodoDialog.addEventListener("click", () => {
    todoDialog.style.display = "block";
})

addTodoButton.addEventListener("click", () => {
    todoDialog.style.display = "none";
})