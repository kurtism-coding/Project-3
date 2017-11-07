
//there are two ways to add a new task, and both are defined here, clicking the button or pressing enter
$( function(){
    $("#addbtn").click(function(){
        additem();
    });
    $("#addinput").keyup(function(event){
        if(event.keyCode === 13){
            additem();
        }
    });
});

//this is what happens once an event happens to call the additem function
function additem(){
    let thelabel = $("#addinput").val();

    if(thelabel !== "") {
        let inputdiv = "<div><span>"+ thelabel + " " + "</span><button onclick='deleteitem(this)'>DELETE</button></div>";
        $(".todocontainer").append(inputdiv);
        $("#addinput").val("");
    }
}

//this will delete a list item
function deleteitem(element){
    $(element).parent().remove();
}

function showlists(){
    ;
}