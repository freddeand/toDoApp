let tasks = [];
let userInput = document.getElementById("text-form");
let addBtn = document.getElementById("submit");
let createP = document.createElement("p");
let divBox = document.getElementsByClassName("empty-box");

console.log(userInput);
console.log(addBtn);

addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let createP = document.createElement("p");
  let taskDescription = userInput.value;
  addNew(taskDescription, createP);
});

function generalId() {
  return Math.floor(Math.random() * 10000);
}
function addNew(taskDescription) {
  const newTask = {
    id: generalId(),
    description: taskDescription,
    done: false,

    // console.log(tasks);
  };
  tasks.push(newTask);
}

function showTasks() {
  let allTasksText = "Alla uppgifter:\n\n";
  tasks.forEach((task) => {
    allTasksText += `${task.id}: ${task.description} ${
      task.done ? ": KLAR" : ": INTE KLAR"
    }\n`;
  });

  // alert(allTasksText);
}

function markReady() {
  let showTaskId = "Alla uppgifter:\n\n";
  tasks.forEach((task) => {
    showTaskId += `${task.id}: ${task.description} ${
      task.done ? "KLAR" : "INTE KLAR"
    }\n`;
  });
  // let id = prompt(`${showTaskId}\nVälj task id att ta klarmarkera`);

  // if (id === null) {
  //   console.log("Avbröt programmet.");
  //   alert("Avbröt programmet.");
  //   return;
  // }

  let task = tasks.find((task) => task.id == id);
  if (task) {
    task.done = true;
    // alert(`${id} klarmarkerad.`);
  } else {
    // alert(`Hittade inte id ${id}`);
  }
}

function removeTask() {
  let showTaskId = "Alla uppgifter:\n\n";
  tasks.forEach((task) => {
    showTaskId += `${task.id}: ${task.description} ${
      task.done ? "KLAR" : "INTE KLAR"
    }\n`;
  });

  // let taskId = prompt(`${showTaskId}\nAnge ID för uppgiften du vill ta bort:`);
  // let index = tasks.findIndex((task) => task.id == taskId);

  // if (taskId === null) {
  //   console.log("Avbröt programmet.");
  //   alert("Avbröt programmet.");
  // }

  if (index !== -1) {
    // Check if task exists
    tasks.splice(index, 1); // Remove the task
    console.log(`Uppgiften med ID ${taskId} har tagits bort.`);
    // alert(`Uppgiften med ID ${taskId} har tagits bort.`);
  } else {
    console.log("Uppgift hittades inte.");
    // alert("Uppgift hittades inte.");
  }
  console.log(tasks);
}
