import { projectList } from "./addTodo";
import { addProject, addTodo } from "./addTodo";

const defaultTodos = [
    {
        "projectTitle": "Personal Tasks",
        "todoList": [
            {
                "todoTitle": "Exercise (30 mins)",
                "description": "Engage in physical activity such as jogging, yoga, or a workout routine to stay fit and healthy.",
                "dueDate": "2024-06-09",
                "priority": "3",
                "project": "Personal Tasks"
            },
            {
                "todoTitle": "Prepare breakfast",
                "description": "Make a nutritious breakfast to start the day with energy. Consider options like oatmeal, smoothie, or eggs.",
                "dueDate": "2024-06-09",
                "priority": "3",
                "project": "Personal Tasks"
            },
            {
                "todoTitle": "Schedule dentist appointment",
                "description": "Call the dental clinic and book a check-up to maintain oral health.",
                "dueDate": "2024-06-15",
                "priority": "2",
                "project": "Personal Tasks"
            },
            {
                "todoTitle": "Clean kitchen",
                "description": "Tidy up the kitchen by washing dishes, wiping down counters, and organizing pantry items.",
                "dueDate": "2024-06-10",
                "priority": "2",
                "project": "Personal Tasks"
            },
            {
                "todoTitle": "Do laundry",
                "description": "Wash, dry, and fold clothes. Ensure all laundry baskets are empty and clothes are put away.",
                "dueDate": "2024-06-11",
                "priority": "2",
                "project": "Personal Tasks"
            }
        ]
    },
    {
        "projectTitle": "Work Tasks",
        "todoList": [
            {
                "todoTitle": "Attend daily stand-up (9:00 AM)",
                "description": "Participate in the team's morning meeting to discuss progress, challenges, and plans for the day.",
                "dueDate": "2024-06-09",
                "priority": "3",
                "project": "Work Tasks"
            },
            {
                "todoTitle": "Complete project proposal",
                "description": "Finish writing the proposal for the new project, ensuring it includes all necessary details and objectives.",
                "dueDate": "2024-06-14",
                "priority": "3",
                "project": "Work Tasks"
            },
            {
                "todoTitle": "Respond to urgent emails",
                "description": "Check inbox for time-sensitive messages and reply promptly to maintain effective communication.",
                "dueDate": "2024-06-09",
                "priority": "3",
                "project": "Work Tasks"
            },
            {
                "todoTitle": "Plan team outing",
                "description": "Organize a social event for the team, considering preferences and schedules to enhance team bonding.",
                "dueDate": "2024-06-18",
                "priority": "1",
                "project": "Work Tasks"
            }
        ]
    },
    {
        "projectTitle": "Learning and Development",
        "todoList": [
            {
                "todoTitle": "Complete Module 3 of Data Science course",
                "description": "Study and finish the third module of your online course, including watching lectures and completing assignments.",
                "dueDate": "2024-06-20",
                "priority": "2",
                "project": "Learning and Development"
            },
            {
                "todoTitle": "Read \"Atomic Habits\"",
                "description": "Continue reading the book \"Atomic Habits\" by James Clear to learn about building effective habits.",
                "dueDate": "2024-06-25",
                "priority": "1",
                "project": "Learning and Development"
            },
            {
                "todoTitle": "Practice coding challenges",
                "description": "Spend time solving coding problems on platforms like LeetCode to improve programming skills.",
                "dueDate": "2024-06-15",
                "priority": "2",
                "project": "Learning and Development"
            }
        ]
    },
    {
        "projectTitle": "Social and Leisure Activities",
        "todoList": [
            {
                "todoTitle": "Call parents",
                "description": "Make a phone call to check in with your parents, catching up on news and maintaining strong family connections.",
                "dueDate": "2024-06-12",
                "priority": "3",
                "project": "Social and Leisure Activities"
            },
            {
                "todoTitle": "Paint for an hour",
                "description": "Dedicate time to painting, allowing yourself to relax and express creativity.",
                "dueDate": "2024-06-13",
                "priority": "2",
                "project": "Social and Leisure Activities"
            },
            {
                "todoTitle": "Watch new episode of favorite series",
                "description": "Enjoy the latest episode of your favorite TV show as a form of relaxation and entertainment.",
                "dueDate": "2024-06-11",
                "priority": "1",
                "project": "Social and Leisure Activities"
            }
        ]
    },
    {
        "projectTitle": "Financial Tasks",
        "todoList": [
            {
                "todoTitle": "Review monthly expenses",
                "description": "Go through your expenses for the month, identifying areas for adjustment to stay within budget.",
                "dueDate": "2024-06-30",
                "priority": "2",
                "project": "Financial Tasks"
            },
            {
                "todoTitle": "Pay utility bills",
                "description": "Ensure all utility bills, such as electricity, water, and internet, are paid on time to avoid late fees.",
                "dueDate": "2024-06-20",
                "priority": "3",
                "project": "Financial Tasks"
            },
            {
                "todoTitle": "Research stocks",
                "description": "Look into potential stock investments, analyzing market trends and company performance for informed decisions.",
                "dueDate": "2024-06-25",
                "priority": "1",
                "project": "Financial Tasks"
            }
        ]
    },
    {
        "projectTitle": "Miscellaneous",
        "todoList": [
            {
                "todoTitle": "Volunteer at local food bank",
                "description": "Spend time helping at a local food bank, contributing to the community by assisting those in need.",
                "dueDate": "2024-06-17",
                "priority": "2",
                "project": "Miscellaneous"
            },
            {
                "todoTitle": "Schedule car oil change",
                "description": "Book an appointment with a mechanic to change your car's oil, ensuring it runs smoothly and efficiently.",
                "dueDate": "2024-06-15",
                "priority": "3",
                "project": "Miscellaneous"
            },
            {
                "todoTitle": "Research vacation destinations",
                "description": "Explore potential destinations for your next vacation, considering factors like budget, activities, and travel restrictions.",
                "dueDate": "2024-06-30",
                "priority": "1",
                "project": "Miscellaneous"
            }
        ]
    }
];

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

function loadDefaultContent() {
        defaultTodos.forEach(element => {
            projectList.push(element);
        });
        saveContent();

    localStorage.setItem("default", true)
}

if (!localStorage.default) {
    loadDefaultContent();
} else {
    loadContent();
}