const input = document.getElementById("addTask")
const btn = document.getElementById("btn")
const parent = document.getElementById("task-list")


function addtask() {
    if (input.value === "") {
        alert("Enter a task to add!")
    }
    else {
        const li = document.createElement("li")
        li.innerHTML = input.value;
        parent.appendChild(li)
        const span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    input.value = "";
    saveData(input.value)
}
parent.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})
function saveData() {
    window.localStorage.setItem("task",parent.innerHTML);
}
function getData(){
    parent.innerHTML = localStorage.getItem("task")
}
window.addEventListener("load",()=>{
    getData()
})