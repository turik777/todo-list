import { projectList } from "./addTodo";
import { addProject, addTodo } from "./addTodo";

export function saveContent() {
    const storageString = JSON.stringify(projectList);
    
    localStorage.setItem("projects", storageString);
}

function loadContent() {
    const storageString = JSON.parse(localStorage.getItem("projects"));

    if (storageString === null) return;

    storageString.forEach(element => {
        if (element.todoList) {
            addProject(element.projectTitle);
            element.todoList.forEach(element => {
                addTodo(element.todoTitle, element.description, element.dueDate, element.priority, element.project);
            });
        } else if (element.todoTitle){
            addTodo(element.todoTitle, element.description, element.dueDate, element.priority, element.project);
        }
    });
};

loadContent();