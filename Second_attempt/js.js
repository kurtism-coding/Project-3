let lists = [];
let selected = 0;
//PROOF of CONCEPT
/*let Number = 200;
 showNumber(Number);
function showNumber (Number){
    console.log(Number)
}
*/
//Not sure how to use, but I want to implement:
/*let JSON = JSON.stringify(lists);
localStorage.setItem("lists", JSON);
*/

// PROOF of CONCEPT
/*
whatIf("Kurtis");
function whatIf(x){
    hi(x);
}
function hi(name){
    console.log("Hi " + name);
}
*/

function newList(listName){
    //console.log("newList is being called");
    let i = 0;
    for(i = 0; i < lists.length; i++) {
        lists[i].selected = false;
    }
    let newList = {
        name: listName,
        tasks: [],
        selected: true
    };
    selected = i;

    lists.push(newList);
    displayLists();
    displayTasks(selected);
}

function displayLists(){
    //console.log("displayLists is being called");
    let listDisplay = "";
    let i = 0;
    for (i = 0; i < lists.length; i++) {
        listDisplay += "<div class='list'>" + "<p>" + "<button class='noBorder' onclick='selectList(" + i + ")'>" + lists[i].name + "</button>"
            + "<button onclick=deleteList()>Delete</button>" + "</p>" + "<hr>";
    }
    //multiple divs with same id?^^
    document.getElementById("listContainer").innerHTML = listDisplay;

}
$(function listButton(){
    //console.log("listButton called");
    $("#addList").click(function list(){
        newList($("#listInput").val());
        document.getElementById("listInput").value = "";
    });
    $("#listInput").keyup(function listkeyup(event){
        if(event.keyCode === 13){
            newList($("#listInput").val());
            document.getElementById("listInput").value = "";
        }

    });
});
function newTask(selected){
    //console.log("newTask is being called");
    let taskInput = $("#taskInput").val();
    let newTask = {
        task: taskInput,
        completed: false

    };
    lists[selected].tasks.push(newTask);
    displayTasks(selected);

}
function displayTasks(listIndex){
    //console.log("displayTasks called");
    let taskDisplay = "";
    let i = 0;
    for (i = 0; i < lists[listIndex].tasks.length; i++){
        taskDisplay += "<div>" + "<p>" + "<button onclick=markTask()>" + lists[listIndex].tasks[i].task + "</button>" +
            "<button onclick=deleteTask()>Delete</button>" + "</p>";
    }
    document.getElementById("listContent").innerHTML = taskDisplay + "<div class='taskButtonDiv'>" + "<input type='text' id='taskInput'>" +
        "<button id='taskButton'" + " onclick= newTask(" + selected + ")" + ">New Task</button>" + "</div>";
        /**/

}
$(function taskButton(){
    //console.log("taskButton called");
    $("#taskButton").click(function(){
        console.log("taskButton click works");
        //newTask(selected);
    });
    $("#taskInput").keyup(function(event){
        if(event.keyCode === 13){
            console.log("taskButton enter works");
            //newTask(selected);
        }
    });
});

function selectList(listIndex){
    for(i = 0; i < lists.length; i++) {
        lists[i].selected = false;
    }
    //console.log("selectList called");
    //console.log(listIndex);
    lists[listIndex].selected = true;
    selected = listIndex;
    //listNumber = listIndex;
    displayTasks(listIndex);
}

function deleteList(listIndex){
    console.log("deleteList called");
    delete lists[listIndex];
}

function deleteTask(listIndex,taskIndex){
    console.log("deleteTask called");
    delete lists[listIndex].tasks[taskIndex];
}

function clearMarked(){
    console.log("clearMarked called");
    //loop through tasks array and delete any that have property: completed = true
}

function markTask(listIndex,taskIndex){
    console.log("markTask called");
    lists[listIndex].tasks[taskIndex].completed = true;
}

function showLists(){
        let x = document.getElementById("listSection");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
//shows lists on click, hides lists onclick



