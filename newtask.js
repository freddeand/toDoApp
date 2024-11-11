let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Gets tasks from localStorage or empty array
let form = document.getElementById("formular");
let taskContainer = document.getElementById("div-container");
let taskHeader = document.querySelector("#task-header");
// Fredde
// box for information.
let divBox = document.getElementById("box");
let divBtn = document.getElementById("toolTip");

divBtn.addEventListener("click", function () {
  if (divBox.innerText === "") {
    divBox.innerText =
      "Denna applikation hjälper dig att hantera dina uppgifter.\n Du kan lägga till, markera som färdiga och ta bort uppgifter.\n När uppgiften är färdig, markera den som klar!";
  } else {
    divBox.innerText = "";
  }
});

// Function to generate an ID
function generalId() {
  return Math.floor(Math.random() * 10000);
}
// Moa
// Controlls if tasks are saved and stored in localStorage when the site loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("Loading tasks from localStorage:", tasks);
  tasks.forEach((task) => renderTask(task));
  updateTaskHeader();
});

// Adds a task via submit
form.addEventListener("submit", function addTask(event) {
  event.preventDefault();
  let inputText = document.getElementById("input");
  if (inputText.value.trim() === "") {
    alert("Vänligen skriv in en beskrivning.");
    return;
  }

  const newTask = {
    id: generalId(),
    description: inputText.value,
    done: false,
  };

  tasks.push(newTask);
  saveTasks();
  renderTask(newTask);
  updateTaskHeader();
  // Clear the input field
  inputText.value = "";
});

// Function to render tasks
function renderTask(task) {
  let addPara = document.createElement("p");

  // Add a class based on if the tasks are done or not
  addPara.setAttribute("class", task.done ? "done" : "notDone");
  addPara.innerText = task.description;

  // Remove tasks button
  let removeBtn = document.createElement("button");
  removeBtn.innerText = "Ta bort uppgift";
  removeBtn.style.margin = "10px";
  removeBtn.addEventListener("click", function () {
    let removeYes = document.createElement("button");
    let removeNo = document.createElement("button");

    removeYes.innerText = "ja";
    removeNo.innerText = "nej";

    addPara.appendChild(removeYes);
    addPara.appendChild(removeNo);

    addPara.removeChild(removeBtn);
    addPara.removeChild(readyBtn);

    removeYes.addEventListener("click", function () {
      taskContainer.removeChild(addPara);
      tasks = tasks.filter((t) => t.id !== task.id);
      saveTasks();
      updateTaskHeader();
    });

    removeNo.addEventListener("click", function () {
      addPara.innerText = task.description;
      addPara.appendChild(removeBtn);
      addPara.appendChild(readyBtn);
      addPara.removeChild(removeYes);
      addPara.removeChild(removeNo);
    });
  });
  // Benjamin
  // "Mark as ready"-button
  let readyBtn = document.createElement("button");
  readyBtn.innerText = task.done ? "Markera som ej klar" : "Färdig markera";
  readyBtn.addEventListener("click", function () {
    task.done = !task.done; //
    addPara.classList.toggle("done", task.done);
    addPara.classList.toggle("notDone", !task.done);
    readyBtn.innerText = task.done ? "Markera som ej klar" : "Färdig markera";
    saveTasks();
  });

  // Add buttons and tasks in DOM
  addPara.appendChild(removeBtn);
  addPara.appendChild(readyBtn);
  taskContainer.appendChild(addPara);
}

// Function to save tasks using localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log("Tasks saved to localStorage:", tasks);
}

// Function for "Alla uppgifter". Doesn't/does show when the task array is empty/has tasks
function updateTaskHeader() {
  if (tasks.length > 0) {
    taskHeader.style.display = "block";
  } else {
    taskHeader.style.display = "none";
  }
}
