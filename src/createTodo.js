import { projectList } from "./addTodo";

export const todos = document.querySelector(".todos");

function createTodo(element) {
    const todo = document.createElement("div");
    todo.classList.add("todo");
    const div = document.createElement("div");
    const todoTitle = document.createElement("div");
    todoTitle.classList.add("todo-title");
    const todoDescription = document.createElement("div");
    todoDescription.classList.add("todo-description");
    const todoDate = document.createElement("div");
    todoDate.classList.add("todo-date");
    const divDelete = document.createElement("div");
    const todoDeleteButton = document.createElement("button");
    const deleteImage = document.createElement("img");
    deleteImage.src = "/src/img/delete-icon.svg";
    
    todoTitle.textContent = element.todoTitle;
    todoDescription.textContent = element.description;
    todoDate.textContent = element.dueDate;
    const todoProject = element.project;

    switch (element.priority) {
        case "1":
            todo.style.borderLeft = "1em solid green";
            break;
        case "2":
            todo.style.borderLeft = "1em solid orange";
            break;
        case "3":
            todo.style.borderLeft = "1em solid red";
            break;
        default:
            break;
    }

    todos.appendChild(todo);
    todo.appendChild(div);
    todo.appendChild(divDelete);
    div.appendChild(todoTitle);
    div.appendChild(todoDate);
    divDelete.appendChild(todoDescription);
    divDelete.appendChild(todoDeleteButton);
    todoDeleteButton.appendChild(deleteImage);

    todoDeleteButton.addEventListener("click", () => {
        const projectIndex = projectList.findIndex(project => project.projectTitle === todoProject || project.todoTitle === todoTitle.textContent);

        if (projectList[projectIndex].projectTitle) {
            const todoIndex = projectList[projectIndex].todoList.findIndex(todo => todo.todoTitle === todoTitle.textContent);

            projectList[projectIndex].todoList.splice(todoIndex, 1);
        } else {
            projectList.splice(projectIndex, 1);
        }

        todo.remove();
    })
}

export function createTodoDOM(projectName) {
    todos.innerHTML = "";

    projectList.forEach(element => {
        if (projectName === element.projectTitle) {
            element.todoList.forEach(element => {
                createTodo(element);
            });
        };

        if (projectName === "All todos") {    
            if (element.projectTitle) {
                element.todoList.forEach(element => {
                    createTodo(element);
                });
            } else {
                createTodo(element);
            }
        };
    });
}

createTodoDOM("All todos");