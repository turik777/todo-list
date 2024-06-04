export const projectList = [];

class Todo {
    constructor(todoTitle, description, dueDate, priority) {
        this.todoTitle = todoTitle;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class Project {
    constructor(projectTitle) {
        this.projectTitle = projectTitle;
        this.todoList = [];
    }
}

export function addProject(projectTitle) {
    const project = new Project(projectTitle);
    projectList.push(project);
}

export function addTodo(todoTitle, description, dueDate, priority, projectTitle) {
    const todo = new Todo(todoTitle, description, dueDate, priority);
    const project = projectList.find(project => 
        project.projectTitle === projectTitle);
    if (projectTitle === "All todos") { 
        projectList.push(todo);
    } else if (projectTitle) {
        project.todoList.push(todo);
    }
}