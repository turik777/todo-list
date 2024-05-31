import { projectList } from "./addTodo";

const sidebar = document.querySelector(".sidebar div:last-of-type");
const contentTitle = document.querySelector(".content h1");

export function createProjectDOM() {
    sidebar.innerHTML = "";

    projectList.forEach(project => {
        const projectButton = document.createElement("button");

        projectButton.textContent = project.projectTitle;
        if (project.projectTitle) sidebar.appendChild(projectButton);

        projectButton.addEventListener("click", () => {
            contentTitle.textContent = project.projectTitle;
        })
    });

}

createProjectDOM();