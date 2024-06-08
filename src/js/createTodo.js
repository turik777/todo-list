import { projectList } from "./addTodo";
import { saveContent } from "./localStorage";

export const todos = document.querySelector(".todos");

let isExpand = false;

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
    todoDate.textContent = `Due date: ${element.dueDate}`;
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
        saveContent();
    });

    todo.addEventListener("click", () => {
        if (!isExpand) {
            isExpand = true;
            expandTodo(todo, todoTitle, todoDescription, todoDate, element);
        }
    });
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

function expandTodo(todo, todoTitle, todoDescription, todoDate, element) {
    todo.style.display = "none";

    const todoExpand = document.createElement("div");
    todoExpand.classList.add("todo-expand");
    todo.parentNode.insertBefore(todoExpand, todo.nextSibling);

    todoExpand.innerHTML = `
        <div>
            <label for="todo-name-expand">Name:</label>
            <input type="text" name="todo-name-expand" id="todo-name-expand">
        </div>
        <div>
            <label for="todo-description-expand">Description:</label>
            <input type="text" name="todo-description-expand" id="todo-description-expand">
        </div>
        <div>
            <label for="todo-date-expand">Due date:</label>
            <input type="date" name="todo-date-expand" id="todo-date-expand">
        </div>
        <div>
            <label for="todo-priority-expand">Priority:</label>
            <select name="todo-priority-expand" id="todo-priority-expand">
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
            </select>
        </div>
        <div>
            <input type="button" value="Save">
        </div>
    `;

    const todoNameExpand = document.getElementById("todo-name-expand");
    const todoDescriptionExpand = document.getElementById("todo-description-expand");
    const todoDateExpand = document.getElementById("todo-date-expand");
    const todoPriorityExpand = document.getElementById("todo-priority-expand");

    todoNameExpand.value = element.todoTitle;
    todoDescriptionExpand.value = element.description;
    todoDateExpand.value = element.dueDate;
    todoPriorityExpand.value = element.priority;

    const saveButton = document.querySelector(".todos input[type='button']");

    saveButton.addEventListener("click", () => {
        isExpand = false;

        element.todoTitle = todoNameExpand.value;
        element.description = todoDescriptionExpand.value;
        element.dueDate = todoDateExpand.value;
        element.priority = todoPriorityExpand.value;

        todoTitle.textContent = element.todoTitle;
        todoDescription.textContent = element.description;
        todoDate.textContent = `Due date: ${element.dueDate}`;

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
        
        todoExpand.remove();
        todo.style.display = "block";
        saveContent();
    })
}