function addNew() {
    const taskDescription = prompt("Ange beskrivning för uppgiften: ");
    if (taskDescription) {
        const newTask = {
            id: generalId(),
            description: beskrivning,
            done: false
        };
        tasks.push(newTask);
        console.log("Uppgiften har lagts till.");
        alert("Uppgiften har lagts till.");
    } else {
        console.log("Ingen beskrivning. Försök igen.");
        alert("Ingen beskrivning. Försök igen.");
    }
}