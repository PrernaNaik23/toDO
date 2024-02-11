const inputTask =document.getElementById("input-task");
const listContainer=document.getElementById("list-container");
function addTask(){
    if(inputTask.value=== '')
        alert("You must type something!");
    else{
        let li = document.createElement("li");
        li.innerHTML = inputTask.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);

    }
    inputTask.value="";
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();