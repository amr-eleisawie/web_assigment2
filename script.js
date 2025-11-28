const titleInput = document.getElementById("title");
const descInput = document.getElementById("description");
const priorityInput = document.getElementById("priority");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const filterSelect = document.getElementById("filter");
const themeToggle = document.getElementById("themeToggle");


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();



addTaskBtn.addEventListener("click", () => {
    if (!titleInput.value.trim() || !descInput.value.trim()) {
        alert("Please fill all fields.");
        return;
    }

    const task = {
        id: Date.now(),
        title: titleInput.value,
        description: descInput.value,
        priority: priorityInput.value
    };

    tasks.push(task);
    saveTasks();
    displayTasks();

    titleInput.value = "";
    descInput.value = "";
});



function displayTasks() {
    taskList.innerHTML = "";

    const filter = filterSelect.value;

    const filteredTasks = tasks.filter(t =>
        filter === "All" ? true : t.priority === filter
    );

    filteredTasks.forEach(task => {
        const div = document.createElement("div");
        div.className = `task priority-${task.priority}`;

        div.innerHTML = `
            <h3 contenteditable="true" class="task-title">${task.title}</h3>
            <p contenteditable="true" class="task-desc">${task.description}</p>
            <p><strong>Priority:</strong> ${task.priority}</p>
            <button class="edit">Save</button>
            <button class="delete">Delete</button>
        `;

        
        div.querySelector(".edit").addEventListener("click", () => {
            task.title = div.querySelector(".task-title").innerText;
            task.description = div.querySelector(".task-desc").innerText;
            saveTasks();
            alert("Task updated!");
        });

        
        div.querySelector(".delete").addEventListener("click", () => {
            if (confirm("Delete this task?")) {
                tasks = tasks.filter(t => t.id !== task.id);
                saveTasks();
                displayTasks();
            }
        });

        taskList.appendChild(div);
    });
}


filterSelect.addEventListener("change", displayTasks);


function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


var arr =[100,200,300,"moaz","majer"]
console.log(arr)
console.log(arr ,[4])
arr[1]=300
console.log(arr)
console.log(arr.length)
arr.pop()
console.log(arr)
arr.push(800,900)
console.log(arr)
arr.splice(3,0,450)
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift(30)
console.log(arr)
arr2=[10,20,30,40,20,60]



var miniarr=arr2.splice(2,5)

console.log(miniarr)





var arr3=[1,2,3]
var arr4=[5,6,7]
var newarr =arr3.concat(arr4)
console.log(newarr)

console.log(arr2 .reverse())
var strarr=["Array","string"]
var newstring =strarr