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
        listDisplay += "<div class='list'>" + "<p>" + "<button onclick=deleteList(" + i + ")>Delete</button>" +
            "<button class='noBorder' onclick='selectList(" + i + ")'>" + lists[i].name + "</button>" + "</p>" + "<hr>";
    }
    //multiple divs with same id?^^
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

//works!
function deleteList(listIndex){
    lists.splice(listIndex, 1);
    displayLists();
    selected = 0;
    displayTasks(0);
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
    for (i = 0; i < lists[listIndex].tasks.length; i++){
        taskDisplay += "<div>" + "<p>" + "<button onclick=markTask(" + selected + "," + i + ")></button>" + lists[listIndex].tasks[i].task +
            "<button class='btn btn-danger' onclick=deleteTask(" + selected + "," + i + ")>Delete</button>" + "</p>";
    }
    document.getElementById("tasks").innerHTML = taskDisplay + "<div class='taskButtonDiv'>" + "<input type='text' id='taskInput' onkeyup='newTaskOnKeyUp(event)'" + ">" +
        "<button id='taskButton'" + " onclick= newTask(" + selected + ")" + ">New Task</button>" + "</div>" +
        "<button onclick='clearMarked(selected)'>Clear Marked Tasks</button>";


}

//what is even happening with this
// $(function taskButton(){
//     $("body").keyup(function(event){
//         if(event.keyCode === 13){
//             console.log("taskButton enter works");
//             //newTask(selected);
//         }
//     });
// });

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
    displayTasks(selected);
}

//works!
function markTask(selected,taskIndex){
    console.log("markTask called");
    lists[selected].tasks[taskIndex].completed = true;
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



