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
        console.log(this);
        var itemHasDoneClass = $(this).hasClass("done-item"); // check if there is a class (return true/false)
        if (itemHasDoneClass === true) {  // if we have a class
            $(this).removeClass("done-item"); // remove the class    
        } else {     // if we don't have a class
            $(this).addClass("done-item"); //add the class
        }
    }


    $("button").click(function(){
        var toDoName = $("input").val(); //read the input and save it to var
        var newListItem = $('<li>'+ toDoName +'<button class="delete-item-button">Delete</button></li>'); // we create a new list 
        newListItem.click(handleClasses);
        $("ul").append(newListItem); //append the var in the list and use the function
    })


    $("li").click(handleClasses);
        


    
        
      
















})






