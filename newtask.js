let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Hämtar uppgifter från localStorage eller tom array
let form = document.getElementById("formular");
let taskContainer = document.getElementById("div-container");
let taskHeader = document.getElementById("task-header");

// Funktion för att generera unikt ID
function generalId() {
  return Math.floor(Math.random() * 10000);
}

// Kontrollera om uppgifter finns sparade i localStorage när sidan laddas
document.addEventListener("DOMContentLoaded", () => {
  console.log("Loading tasks from localStorage:", tasks);
  tasks.forEach((task) => renderTask(task));
  updateTaskHeader();
});

// Lägger till uppgift vid submit
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
  // Rensa inmatningsfältet
  inputText.value = "";
});

// Funktion för att rendera en uppgift
function renderTask(task) {
  let addPara = document.createElement("p");
  
  // Sätt klass baserat på om uppgiften är klar eller ej
  addPara.setAttribute("class", task.done ? "done" : "notDone");
  addPara.innerText = task.description;
  
  // "Ta bort uppgift"-knapp
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

  // "Färdig markera"-knapp
  let readyBtn = document.createElement("button");
  readyBtn.innerText = task.done ? "Markera som ej klar" : "Färdig markera";
  readyBtn.addEventListener("click", function () {
    task.done = !task.done; //
    addPara.classList.toggle("done", task.done);
    addPara.classList.toggle("notDone", !task.done);
    readyBtn.innerText = task.done ? "Markera som ej klar" : "Färdig markera";
    saveTasks()
  });

    // Lägg till knapparna och uppgiften i DOM
    addPara.appendChild(removeBtn);
    addPara.appendChild(readyBtn);
    taskContainer.appendChild(addPara);
  }

  // Funktion för att spara uppgifter till localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log("Tasks saved to localStorage:", tasks);
}

// Function for "Alla uppgifter". Doesn't/does show when the task array is empty/has tasks
function updateTaskHeader () {
  if (tasks.length > 0) {
    taskHeader.style.display = "block";
  } else {
    taskHeader.style.display = "none";
  }
}