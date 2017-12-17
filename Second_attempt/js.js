let lists = [];
let selected = 0;
//Not sure how to use, but I want to implement:
/*let JSON = JSON.stringify(lists);
localStorage.setItem("lists", JSON);
*/

//works!
function newList(listName){
    //console.log("newList is being called");
    let i = 0;
    for(i = 0; i < lists.length; i++) {
        lists[i].selected = false;
    }
    if (listName !== "") {
        let newList = {
            name: listName,
            tasks: [],
            selected: true
        };
        selected = i;

        lists.push(newList);
        displayLists();
        displayTasks(selected);
        //}
    }
}

function displayLists(){
    //console.log("displayLists is being called");
    let listDisplay = "";
    let i = 0;
    for (i = 0; i < lists.length; i++) {
        listDisplay += "<div class='list' id='list" + i + "'><p><button class='deleteBtn' onclick=deleteList(" + i + ")>" +
            "<i class='fa fa-trash' aria-hidden='true'></i></button>" +
            "<button class='noBorder' onclick='selectList(" + i + ")'>" + lists[i].name + "</button>" + "</p>" + "<hr>";
    }
    document.getElementById("listContainer").innerHTML = listDisplay;

}

//works!
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

//works!
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

/*function deleteList(listIndex){
    $("#list" + listIndex).fadeOut();
    lists.splice(listIndex, 1);
    //displayLists();
    selected = 0;
    displayTasks(0);


}*/
function deleteList(listIndex){
    $("#list" + listIndex).fadeOut("slow", function(){
        // whatever code you put in here will fire after the animation is done.
        lists.splice(listIndex, 1);
        displayLists();
        selected = 0;
        displayTasks(0);
    });
}
function newTaskOnKeyUp(event) {
    if(event.keyCode === 13){
        newTask(selected);
    }
}

//works!
function newTask(selected){
    //console.log("newTask is being called");
    let taskInput = $("#taskInput").val();
    if (taskInput !== "") {
        let newTask = {
            task: taskInput,
            completed: false

        };
        lists[selected].tasks.push(newTask);
        displayTasks(selected);
    }
}

//works!
function displayTasks(listIndex){
    //console.log("displayTasks called");
    let taskDisplay = "";
    let i = 0;
    let icon = "";
    if (lists.length === 0){
        document.getElementById("tasks").innerHTML = ""}
        else{
            for (i = 0; i < lists[listIndex].tasks.length; i++){
            if (lists[listIndex].tasks[i].completed === false){
                icon = "<i class='fa fa-square-o' id='task" + i + "' aria-hidden='true'></i>";
            }
            else {
                icon = "<i class='fa fa-check-square' id='task" + i + "' aria-hidden='true'></i>"
            }
            taskDisplay += "<div class='task'><button class='completeBtn' onclick=markTask(" + selected + "," + i + ")>" +
                icon + "</button>" +
                "<div class='taskName' contenteditable='True'>" + lists[listIndex].tasks[i].task + "</div>" +
                "<button class='deleteBtn' onclick=deleteTask(" + selected + "," + i + ")><i class='fa fa-trash' aria-hidden='true'></i></button>" + "</div>";
        }
            document.getElementById("tasks").innerHTML = "<div class='tasksTitle'><h2>~~" + lists[selected].name + "~~</h2></div>" + taskDisplay +
                "<div class='taskButtonDiv'>" + "<input type='text' id='taskInput' onkeyup='newTaskOnKeyUp(event)'" + ">" +
                "<button id='taskButton'" + " onclick= newTask(" + selected + ")" + ">New Task</button>" + "</div>" +
                "<button onclick='clearMarked(selected)'>Clear Marked Tasks</button>";}
//multiple divs with same id??^^
//<i class='fa fa-square-o' aria-hidden='true'></i>
    //<i class='fa fa-check-square' aria-hidden='true'></i>
}

//seems to work!
function deleteTask(selected,taskIndex){
    console.log("deleteTask called");
    lists[selected].tasks.splice(taskIndex,1);
    displayTasks(selected);
}

//works!
function clearMarked(selected){
    let t = 0;
    console.log("clearMarked called");
    for (t=0; t < lists[selected].tasks.length; t++){
        if (lists[selected].tasks[t].completed){
            lists[selected].tasks.splice(t,1);
            t--;
        }
    }
    //ANIMATE??
    displayTasks(selected);
}

//works!
function markTask(selected,taskIndex){
    //console.log("markTask called");
    let y = lists[selected].tasks[taskIndex].completed;
    if (y !== true){
        y = true;
    } else{
        y = false;
    }
    lists[selected].tasks[taskIndex].completed = y;
    let x = $("#task" + taskIndex);
    x.toggleClass("fa fa-square-o");
    x.toggleClass("fa fa-check-square");


}

//works!
function showLists(){
        let x = document.getElementById("listSection");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
//shows lists on click, hides lists onclick



