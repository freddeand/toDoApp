function showMenu() {
    prompt("Meny");
}


function showTasks() {
    // Examples until addNew() is done.
    let tasks = [
        {
            id: 1,
            text: "Exempeluppgift A.",
            done: false,
        },
        {
            id: 2,
            text: "Exempeluppgift B.",
            done: true,
        },
    ]


    let allTasksText = "Alla uppgifter:\n\n";
    tasks.forEach(task => {
        allTasksText += `${task.id}: ${task.text} ${task.done ? "KLAR": "INTE KLAR"}\n`;
    })

    alert(allTasksText);
}