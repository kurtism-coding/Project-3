
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
        let inputdiv = "<div><span class='bold'>"+ thelabel + " " + "</span><button onclick='deleteitem(this)'>DELETE</button></div>";
        $(".todocontainer").append(inputdiv);
        $("#taskInput").val("");
    }
}

//I need my addlist function to create a new div that will, when clicked on, display the tasks
//to be created
function addList() {
    let thelabel = $("#listInput").val();
    /*let x=0;
    let listnumber = ++x;
    let div = document.createElement("div " + "class='list" + listnumber + "'");*/

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
    //show everything on click, hide everything onclick

function showtasks(){
    $("").append();
}