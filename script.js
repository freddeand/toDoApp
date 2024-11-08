
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// localStorage.getItem("tasks");
let form = document.getElementById("formular");

// Visa alla gamla tasks när sidan laddas.
tasks.forEach(newTask => {
  //skapa <p> på sidan
let newDiv = document.getElementById("div-container");
let addPara = document.createElement("p"); 
  
  addPara.setAttribute("class", notDone);
  addPara.classList.toggle("done", newTask.done);
  addPara.innerText = newTask.description;
  
  
  // Ta bort uppgift knapp
let removeBtn = document.createElement("button");
removeBtn.innerText = "Ta bort uppgift";
removeBtn.style.margin = "10px";
removeBtn.addEventListener("click", function(){
    
  // Tar bort uppgift när ta bort knappen klickas
  newDiv.removeChild(addPara);
    
  // Tar bort uppgiften från arrayen
  tasks = tasks.filter((t) => t.id !== newTask.id);
});
  
  // Markera som klar knapp
let readyBtn = document.createElement("button");
readyBtn.innerText = "Färdig markera";
readyBtn.addEventListener("click", function(){
  addPara.classList.add("done");
  // newTask.done = true;
  if (newTask.done) {
    newTask.done = false;
    addPara.classList.remove("done");
    readyBtn.innerText = "Färdig markera";
  } else {
    newTask.done = true;
    addPara.classList.add("done");
    readyBtn.innerText = "Avmarkera";
  }
})
  
 
  
newDiv.appendChild(addPara);
addPara.appendChild(removeBtn);
addPara.appendChild(readyBtn);
})


function generalId() {
  return Math.floor(Math.random() * 10000);
}

// Lägg till uppgift vid submit
form.addEventListener("submit", function addTask(event) {
  event.preventDefault();
  console.log("Adding task.")

  
  //ta från formulär
  let inputText = document.getElementById("input");
  
  if (inputText.value.trim() === "") {
    console.log("Vänligen skriv in en beskrivning.");
    return;
  }

  console.log("inputtext.textcontent", inputText.value);
  
  
  const newTask = {
    id: generalId(),
    description: inputText.value,
    done: false,
  };
  console.log("new task", newTask);
  
  
  //stoppa i array
  tasks.push(newTask);
  console.log("taskarray", tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  // Tömmer inmatningsfältet
  inputText.value = "";

  
  
//skapa <p> på sidan
let newDiv = document.getElementById("div-container");
let addPara = document.createElement("p"); 
  
  addPara.setAttribute("class","notDone");
  addPara.innerText = newTask.description;
  
  
  // Ta bort uppgift knapp
let removeBtn = document.createElement("button");
removeBtn.innerText = "Ta bort uppgift";
removeBtn.style.margin = "10px";
removeBtn.addEventListener("click", function(){
    
  // Tar bort uppgift när ta bort knappen klickas
  newDiv.removeChild(addPara);
    
  // Tar bort uppgiften från arrayen
  tasks = tasks.filter((t) => t.id !== newTask.id);
});
  
  // Markera som klar knapp
let readyBtn = document.createElement("button");
readyBtn.innerText = "Färdig markera";
readyBtn.addEventListener("click", function(){
  addPara.classList.add("done");
  // newTask.done = true;
  if (newTask.done) {
    newTask.done = false;
    addPara.classList.remove("done");
    readyBtn.innerText = "Färdig markera";
  } else {
    newTask.done = true;
    addPara.classList.add("done");
    readyBtn.innerText = "Avmarkera";
  }
})
  
 
  
newDiv.appendChild(addPara);
addPara.appendChild(removeBtn);
addPara.appendChild(readyBtn);
  
  
 
console.log( `${newTask.id}: ${newTask.description} ${
    newTask.done ? ": KLAR" : ": INTE KLAR"
}\n`);

});

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


// gammalt
function showMenu() {
  let menu;
  let menuText =
    "\nHej och välkommen till din ToDo\n Vad vill du göra?\n 1.Lägga till uppgifter\n 2.Visa aktuella uppgifter\n 3.Markera uppgifter som klara.\n 4.Ta bort uppgifter.\n 5.Avsluta";
  do {
    menu = Number(prompt(menuText));

    if (menu === 0) {
      console.log("Avbröt programmet");
      alert("Avbröt programmet");
      return;
    }

    if (isNaN(menu)) {
      menuText =
        "Hej igen! Du måste skriva in en siffra mellan 1-5.\n" + menuText;
    } else {
      switch (menu) {
        case 1:
          addNew();
          break;
        case 2:
          showTasks();
          break;
        case 3:
          markReady();
          break;
        case 4:
          removeTask();
          break;
        case 5:
          console.log("Avslutat To-Do programmet");
          alert("Avslutat To-Do programmet");
          break;
        default:
          alert("Skriv in en siffra mellan 1-5");
      }
    }
  } while (menu !== 5 && menu !== 0);
}

function addNew() {
  const taskDescription = prompt("Ange beskrivning för uppgiften: ");

  if (taskDescription === null) {
    console.log("Avbröt programmet.");
    alert("Avbröt programmet.");
    return;
  }

  if (taskDescription) {
    const newTask = {
      id: generalId(),
      description: taskDescription,
      done: false,
    };
    
    console.log("Uppgiften har lagts till.");
    alert("Uppgiften har lagts till.");
  } else {
    console.log("Ingen beskrivning. Försök igen.");
    alert("Ingen beskrivning. Försök igen.");
  }
  console.log(tasks);
}

function showTasks() {
  let allTasksText = "Alla uppgifter:\n\n";
  tasks.forEach((task) => {
    allTasksText += `${task.id}: ${task.description} ${
      task.done ? ": KLAR" : ": INTE KLAR"
    }\n`;
  });

  alert(allTasksText);
}

function markReady() {
  let showTaskId = "Alla uppgifter:\n\n";
  tasks.forEach((task) => {
    showTaskId += `${task.id}: ${task.description} ${
      task.done ? "KLAR" : "INTE KLAR"
    }\n`;
  });
  let id = prompt(`${showTaskId}\nVälj task id att ta klarmarkera`);

  if (id === null) {
    console.log("Avbröt programmet.");
    alert("Avbröt programmet.");
    return;
  }

  let task = tasks.find((task) => task.id == id);
  if (task) {
    task.done = true;
    alert(`${id} klarmarkerad.`);
  } else {
    alert(`Hittade inte id ${id}`);
  }
}

function removeTask() {
  let showTaskId = "Alla uppgifter:\n\n";
  tasks.forEach((task) => {
    showTaskId += `${task.id}: ${task.description} ${
      task.done ? "KLAR" : "INTE KLAR"
    }\n`;
  });

  let taskId = prompt(`${showTaskId}\nAnge ID för uppgiften du vill ta bort:`);
  let index = tasks.findIndex((task) => task.id == taskId);

  if (taskId === null) {
    console.log("Avbröt programmet.");
    alert("Avbröt programmet.");
  }

  if (index !== -1) {
    // Check if task exists
    tasks.splice(index, 1); // Remove the task
    console.log(`Uppgiften med ID ${taskId} har tagits bort.`);
    alert(`Uppgiften med ID ${taskId} har tagits bort.`);
  } else {
    console.log("Uppgift hittades inte.");
    alert("Uppgift hittades inte.");
  }
  console.log(tasks);
}