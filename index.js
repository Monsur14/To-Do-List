const entertask = document.getElementById("enter-task");
const listcontainer = document.getElementById("myList");

function addTask(){

    if(entertask.value === ''){
        alert("enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = entertask.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    entertask.value = "";
    saveData();
}

listcontainer.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }

}, false);

function saveData(){

    localStorage.setItem("data", listcontainer.innerHTML);

}

function showData(){

    listcontainer.innerHTML = localStorage.getItem("data");

}
showData();
