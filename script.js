function removeTask() {
  let showTaskId = "Alla uppgifter:\n\n";
  tasks.forEach((task) => {
    showTaskId += `${task.id}: ${task.description} ${
      task.done ? "KLAR" : "INTE KLAR"
    }\n`;
  });

  let taskId = prompt(`${showTaskId} Ange ID för uppgiften du vill ta bort:`);
  let index = tasks.findIndex((task) => task.id == taskId);

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
