let lists = [];
let lLength = lists.length;
let task = [];
let listDisplay = "";

document.getElementById("listContainer").innerHTML = listDisplay;

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


function newList(listInput){
    lists.push(listInput);
    listInput = [];
    //maybe make each list an object with task numbers and editable values(the task). Task number should be array length
    //listArray = listInput;

    //make new "list" array with listNumber 1, 2, etc..
    function listContainer(){
        /*for (i = 0; i < lLength; i++) {
            //listArray += "<div>" + "<button onclick='showTasks(listNumber)'>" + lists[i] + "</button>" + "<button>Delete</button>" + "</div>";
            listArray += "hi";
        }*/
        //**********FOR LOOP IS NOT WORKING********
        //listArray += "<div>" + lists[i] + "<button>Delete</button>" + "</div>";
        //console.log("listContainer is being called");
        document.getElementById("listContainer").innerHTML = listDisplay;
    }
    listContainer()
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

function newTask(listNumber,taskInput){
    //list(listNumber).push(taskInput);
}











function deleteList(){

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
