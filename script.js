// Array for all the tasks
let tasks = [];

function showMenu() {
  let menu;
  const originalMenuText =
    "Hej och välkommen till din ToDo\n Vad vill du göra?\n 1.Lägga till uppgifter\n 2.Visa aktuella uppgifter\n 3.Markera uppgifter som klara.\n 4.Ta bort uppgifter.\n 5.Avsluta";
  let menuText = originalMenuText;
  do {
    let inputByUser = prompt(menuText);

    // Code for when a user presses the cancel button
    if (inputByUser === null) {
      console.log("Avslutat To-Do programmet");
      alert("Avslutat To-Do programmet");
      return;
    }
    if (inputByUser.trim() === "") {
      alert("Du måste skriva in en siffra mellan 1-5.");
      continue; // Go back to the start of the loop
    }

    menu = Number(inputByUser);

    if (isNaN(menu)) {
      menuText =
        "Hej igen! Du måste skriva in en siffra mellan 1-5.\n" +
        originalMenuText;
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
      menuText = originalMenuText; // restores the menuText to original if your input isnt a number.
    }
  } while (menu !== 5);
}

// Generates a random number between 0-10000
function generalId() {
  return Math.floor(Math.random() * 10000);
}

// Function for when a user adds a new task
function addNew() {
  const taskDescription = prompt("Ange beskrivning för uppgiften: ");

  if (taskDescription === null) {
    console.log("Avbröt programmet.");
    alert("Avbröt programmet.");
    return;
  }

  // Object for the new task, holds the ID, the task and if the task is done or not
  if (taskDescription) {
    const newTask = {
      id: generalId(),
      description: taskDescription,
      done: false,
    };

    // Pushes the new task into the array, and has an error code if the user doesn't add a description
    tasks.push(newTask);
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
// removes the task based on ID.
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
    tasks.splice(index, 1);
    console.log(`Uppgiften med ID ${taskId} har tagits bort.`);
    alert(`Uppgiften med ID ${taskId} har tagits bort.`);
  } else {
    console.log("Uppgift hittades inte.");
    alert("Uppgift hittades inte.");
  }
  console.log(tasks);
}
