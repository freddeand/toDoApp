let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Hämtar uppgifter från localStorage eller tom array

let form = document.getElementById("formular");
let taskContainer = document.getElementById("div-container");

// Funktion för att generera unikt ID
function generalId() {
  return Math.floor(Math.random() * 10000);
}

// Kontrollera om uppgifter finns sparade i localStorage när sidan laddas
document.addEventListener("DOMContentLoaded", () => {
  console.log("Loading tasks from localStorage:", tasks); // Kontrollera vad som hämtas
  tasks.forEach((task) => renderTask(task)); // Rendera varje sparad uppgift vid sidladdning
});

// Lägger till uppgift vid submit
form.addEventListener("submit", function addTask(event) {
  event.preventDefault();

  let inputText = document.getElementById("input");

  if (inputText.value.trim() === "") {
    alert("Vänligen skriv in en beskrivning.");
    return;
  }

  // Skapa ny uppgift
  const newTask = {
    id: generalId(),
    description: inputText.value,
    done: false,
  };

  // Lägg till uppgift i arrayen och rendera den
  tasks.push(newTask);
  saveTasks(); // Uppdatera localStorage
  renderTask(newTask);

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
      saveTasks(); // Uppdatera localStorage efter borttagning
    });
    removeNo.addEventListener("click", function () {
      addPara.innerText = task.description;
      addPara.appendChild(removeBtn);
      addPara.appendChild(readyBtn);
      addPara.removeChild(removeYes);
      addPara.removeChild(removeNo);
    });
    // taskContainer.removeChild(addPara);
    // tasks = tasks.filter((t) => t.id !== task.id);
    // saveTasks(); // Uppdatera localStorage efter borttagning
  });

  // "Färdig markera"-knapp
  let readyBtn = document.createElement("button");
  readyBtn.innerText = task.done ? "Markera som ej klar" : "Färdig markera";
  readyBtn.addEventListener("click", function () {
    task.done = !task.done; // Ändra done-status
    addPara.classList.toggle("done", task.done); // Uppdatera klass i DOM
    addPara.classList.toggle("notDone", !task.done); // Uppdatera klass i DOM
    readyBtn.innerText = task.done ? "Markera som ej klar" : "Färdig markera"; // Uppdatera knapptext
    saveTasks(); // Uppdatera localStorage när status ändras
  });

  // Lägg till knapparna och uppgiften i DOM
  addPara.appendChild(removeBtn);
  addPara.appendChild(readyBtn);
  taskContainer.appendChild(addPara);
}

// Funktion för att spara uppgifter till localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log("Tasks saved to localStorage:", tasks); // Kontrollera vad som sparas
}
