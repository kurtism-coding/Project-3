let lists = [];

$(function listButton(){
    $("#addList").click(function list(){
        newList($("#listInput").val());
    });
    $("#listInput").keyup(function listkeyup(event){
        if(event.keyCode === 13){
            newList($("#listInput").val());
        }
    });
});


function newList(listName){
    let newList = {
        name: listName,
        tasks: [],


    };

    lists.push(newList);
    listContainer();
}

function listContainer(){
    let listDisplay = "";
    //listDisplay += "<div>" + "<button onclick='showTasks(listNumber)'>" + lists + "</button>" + "<button>Delete</button>" + "</div>";
    for (i = 0; i < lists.length; i++) {
        listDisplay += "<div>" + "<p>" + lists[i].name + "<button onclick=deleteList()>Delete</button>" + "</p>"  +
            "<input type='text' id='taskInput'>" +
            "<button id='taskButton' onclick= newTask(" + i + ")>New Task</button>" + "</div>";
    }
    //listArray += "<div>" + lists[i] + "<button>Delete</button>" + "</div>";
    //console.log("listContainer is being called");
    document.getElementById("listContainer").innerHTML = listDisplay;
}

function newTask(listIndex){
    let taskInput = $("#taskInput").val();
    let newTask = {
        task: taskInput,
        completed: false

    };
    lists[listIndex].tasks.push(newTask);


}





$(function taskButton(){
    $("#addTask").click(function(){
        newTask($("#taskInput").val(""));
    });
    $("#taskInput").keyup(function(event){
        if(event.keyCode === 13){
            newTask($("#taskInput").val(""));
        }
    });
});














function deleteList(arrayNumber){
    console.log("delete called");

}

function clearMarked(){

}

function markTask(){

}
/*show menu/hide menu
add list


var list = {
    add task
    clear marked tasks
    remove list
}

task{
    can edit
    mark as complete
    remove task
}


variables = task number, list number, list
task = "task" + tasknumber

listname, click on list, hide all lists until one has a "show" variable
*/




//this will delete a list item or task
function deleteitem(element) {
    $(element).parent().remove();
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
