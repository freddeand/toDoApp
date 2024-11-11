
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
