let addButton = document.querySelector("nav .addButton");
let inputField = document.querySelector("nav .inputField");
let ulist = document.querySelector("section ul");
let taskTempl = ulist.firstElementChild;

function addTask() {
    const task = taskTempl.cloneNode(true);
    task.style.display = "flex";
    task.children[1].value = inputField.value;
    ulist.appendChild(task);
}

function deleteTask(e) {
    if(e.target.className == "delButton") { 
        e.target.parentElement.remove();
    }
} 

addButton.addEventListener("click", addTask);
document.body.addEventListener("click", deleteTask); //Add event in this way because can`t add events to dynamically created elements