//ready event
//attach event handler click to the btn
//target the input and read its value
//use the value to creat a new list item html element
//attach the new list item to the DOM

// press enter = refresh
// hover effect
// click on list item = strike trough 
// delete with icon
// save in browser

//load the script
//in the 1st second
//in the future after event

//

$(document).ready(function(){

    function handleClasses(){
        var itemHasDoneClass = $(this).hasClass("done-item"); // check if there is a class (return true/false)
        if (itemHasDoneClass === true) {  // if we have a class
            $(this).removeClass("done-item"); // remove the class    
        } else {     // if we don't have a class
            $(this).addClass("done-item"); //add the class
        }
    }

    function linkDeleteButton(){        //remove buttons
        $(".delete-item-button").click(function(){
            $(this).parent().remove();             
        })
    }


    $(".add-item-button").click(function(){
        var toDoName = $("input").val(); //read the input and save it to var
        var newListItem = $('<li>'+ toDoName +'<i class="fas fa-trash-alt delete-item-button"></i></li>'); // we create jquery variable
        newListItem.click(handleClasses); // add click to the variable
        $("ul").append(newListItem); //append the var in the list and here we create the link item
        linkDeleteButton();
    })


    $("li").click(handleClasses);
    linkDeleteButton();    

    

    
        
      
















})






