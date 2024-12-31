// Array of daily tasks
const tasks = [
    { title: "Plant a Tree", description: "Take some time to plant a tree or care for a nearby plant. Trees help offset carbon emissions." },
    { title: "Reduce Energy Usage", description: "Turn off unused lights and appliances today to conserve energy and reduce your carbon footprint." },
    { title: "Use Public Transport", description: "Switch to public transportation or carpool to save fuel and reduce greenhouse gas emissions." },
    { title: "Recycle an Item", description: "Sort and recycle at least one item today to reduce waste going to landfills." },
    { title: "Avoid Single-Use Plastics", description: "Ditch plastic straws, cups, or bags and use reusable alternatives instead." }
];

// Track points
let points = 0;

// Function to render tasks dynamically
function renderTasks() {
    const taskContainer = document.querySelector(".task-container");
    taskContainer.innerHTML = ""; // Clear existing tasks

    tasks.forEach((task, index) => {
        const taskBox = document.createElement("div");
        taskBox.classList.add("task-box");

        const taskTitle = document.createElement("h3");
        taskTitle.innerText = task.title;

        const taskDescription = document.createElement("p");
        taskDescription.innerText = task.description;

        const taskButton = document.createElement("button");
        taskButton.innerText = "Complete Task";
        taskButton.addEventListener("click", () => completeTask(task.title));

        taskBox.appendChild(taskTitle);
        taskBox.appendChild(taskDescription);
        taskBox.appendChild(taskButton);

        taskContainer.appendChild(taskBox);
    });
}

// Function to complete a task
function completeTask(taskTitle) {
    points += 10;
    document.getElementById("taskPoints").innerText = `Points: ${points}`;
    alert(`Great job! You completed "${taskTitle}" and earned 10 points!`);
}

// Initialize tasks on page load
document.addEventListener("DOMContentLoaded", renderTasks);
