import { projectList } from "./addTodo";
import { createTodoDOM } from "./createTodo";

const sidebar = document.querySelector(".sidebar div:last-of-type");
export const contentTitle = document.querySelector(".content h1");

export function createProjectDOM() {
    sidebar.innerHTML = "";

    projectList.forEach(project => {
        const div = document.createElement("div");
        const projectButton = document.createElement("button");
        const projectDeleteButton = document.createElement("button");
        const deleteImage = document.createElement("img");

        projectButton.textContent = project.projectTitle;
        if (project.projectTitle) {
            sidebar.appendChild(div);
            div.appendChild(projectButton);
            div.appendChild(projectDeleteButton);
            projectDeleteButton.appendChild(deleteImage);
            deleteImage.src = "/src/img/delete-icon.svg";
        }

        projectButton.addEventListener("click", () => {
            contentTitle.textContent = project.projectTitle;

            createTodoDOM(project.projectTitle);
        });

        projectDeleteButton.addEventListener("click", () => {
            const projectIndex = projectList.findIndex(project => 
                project.projectTitle === projectButton.textContent);
            projectList.splice(projectIndex, 1);

            createTodoDOM(project.projectTitle);
            div.remove();
        })
    });

}

createProjectDOM();