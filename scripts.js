
//these make the add list and task buttons work
$(function taskbutton(){
    $("#addTask").click(function(){
        addTask();
    });
    $("#taskInput").keyup(function(event){
        if(event.keyCode === 13){
            addTask();
        }
    });
});

$(function listbutton(){
    $("#addList").click(function list(){
        addList();
    });
    $("#listInput").keyup(function listkeyup(event){
        if(event.keyCode === 13){
            addList();
        }
    });
});

//this is how the actual tasks and lists are added
function addTask(){
    let thelabel = $("#taskInput").val();

    if(thelabel !== "") {
        let inputdiv = "<div class='taskdiv'><span class='bold'>"+ "<i class=\"fa fa-square-o\" aria-hidden=\"true\" onclick='markcomplete()'></i> " + thelabel + " " + "</span><button onclick='deleteitem(this)'>DELETE</button></div>";
        $(".todocontainer").append(inputdiv);
        $("#taskInput").val("");
    }
}

//I need my addlist function to create a new div that will, when clicked on, display the tasks
//to be created
function addList() {
    let thelabel = $("#listInput").val();
    /*
    let x=1;
    let listnumber = ++x;
    let div = document.createElement("div " + "class='list" + listnumber + "'");
    */

    if (thelabel !== "") {
        let inputdiv = "<div><span class='bold' onclick='showtasks()'>" + thelabel + " " + "</span><button onclick='deleteitem(this)'>DELETE</button></div>";
        let listnum =
        $(".listcontainer").append(inputdiv);
        $("#listInput").val("");

    }
}

//this will delete a list item or task
function deleteitem(element){
    $(element).parent().remove();
}

function showlists(){
    let x = document.getElementById("listsection");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
//shows lists on click, hides lists onclick

function markcomplete(){
    //this needs to select the task item and change its style to "text-decoration: line-through"
    //I want to make this toggle as well
    //console.log("it works");
}

function clear(){
    //select all elements with style "text-decoration: line-through" and delete them
}