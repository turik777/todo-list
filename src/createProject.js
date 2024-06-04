import { projectList } from "./addTodo";
import { createTodoDOM } from "./createTodo";

const sidebar = document.querySelector(".sidebar div:last-of-type");
export const contentTitle = document.querySelector(".content h1");

export function createProjectDOM() {
    sidebar.innerHTML = "";

    projectList.forEach(project => {
        const projectButton = document.createElement("button");

        projectButton.textContent = project.projectTitle;
        if (project.projectTitle) sidebar.appendChild(projectButton);

        projectButton.addEventListener("click", () => {
            contentTitle.textContent = project.projectTitle;

            createTodoDOM(project.projectTitle);
        })
    });

}

createProjectDOM();