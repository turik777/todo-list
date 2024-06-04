import { projectList } from "./addTodo";

export const todos = document.querySelector(".todos");

export function createTodoDOM(projectName) {
    todos.innerHTML = "";

    projectList.forEach(project => {
        const todo = document.createElement("div");
        todo.classList.add("todo");
        const div = document.createElement("div");
        const todoTitle = document.createElement("div");
        todoTitle.classList.add("todo-title");
        const todoDescription = document.createElement("div");
        todoDescription.classList.add("todo-description");
        const todoDate = document.createElement("div");
        todoDate.classList.add("todo-date");

        if (projectName === project.projectTitle) {
            project.todoList.forEach(element => {
                const todo = document.createElement("div");
                todo.classList.add("todo");
                const div = document.createElement("div");
                const todoTitle = document.createElement("div");
                todoTitle.classList.add("todo-title");
                const todoDescription = document.createElement("div");
                todoDescription.classList.add("todo-description");
                const todoDate = document.createElement("div");
                todoDate.classList.add("todo-date");

                todoTitle.textContent = element.todoTitle;
                todoDescription.textContent = element.description;
                todoDate.textContent = element.dueDate;

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
                todo.appendChild(todoDescription);
                div.appendChild(todoTitle);
                div.appendChild(todoDate);
            });
        };

        if (projectName === "All todos") {    
            if (project.projectTitle) {
                project.todoList.forEach(element => {
                    const todo = document.createElement("div");
                    todo.classList.add("todo");
                    const div = document.createElement("div");
                    const todoTitle = document.createElement("div");
                    todoTitle.classList.add("todo-title");
                    const todoDescription = document.createElement("div");
                    todoDescription.classList.add("todo-description");
                    const todoDate = document.createElement("div");
                    todoDate.classList.add("todo-date");
                    
                    todoTitle.textContent = element.todoTitle;
                    todoDescription.textContent = element.description;
                    todoDate.textContent = element.dueDate;
    
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
                    todo.appendChild(todoDescription);
                    div.appendChild(todoTitle);
                    div.appendChild(todoDate);
                });
            } else {
                todoTitle.textContent = project.todoTitle;
                todoDescription.textContent = project.description;
                todoDate.textContent = project.dueDate;
    
                switch (project.priority) {
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
                todo.appendChild(todoDescription);
                div.appendChild(todoTitle);
                div.appendChild(todoDate);
            }
        };

    });
}

createTodoDOM("All todos");