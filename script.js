let tasks = [];

function showMenu() {
  let menu;
  let menuText =
    "Hej och välkommen till din ToDo\n Vad vill du göra?\n 1.Lägga till uppgifter\n 2.Visa aktuella uppgifter\n 3.Markera uppgifter som klara.\n 4.Ta bort uppgifter.\n 5.Avsluta";
  do {
    menu = Number(
      prompt(
        "Hej och välkommen till din ToDo\n Vad vill du göra?\n 1.Lägga till uppgifter\n 2.Visa aktuella uppgifter\n 3.Markera uppgifter som klara.\n 4.Ta bort uppgifter.\n 5.Avsluta"
      )
    );
    console.log(menu, menuText);
    if (isNaN(menu)) {
      alert("Skriv in ett siffra.");
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
          console.log("Avlsutat ToDo");
          alert("Avslutat ToDo");
          break;
        default:
          alert("Skriv in en siffra mellan 1-5");
      }
    }
  } while (menu !== 5);
}

function generalId() {
  return Math.floor(Math.random() * 10000);
}
function addNew() {
  const taskDescription = prompt("Ange beskrivning för uppgiften: ");
  if (taskDescription) {
    const newTask = {
      id: generalId(),
      description: taskDescription,
      done: false,
    };
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
    tasks.forEach(task => {
        allTasksText += `${task.id}: ${task.description} ${task.done ? "KLAR": "INTE KLAR"}\n`;
    })

    alert(allTasksText);
}
