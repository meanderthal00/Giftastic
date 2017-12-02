$(function () {
    // testing path
    console.log("I work");
    // API KEY: wZtZQpZDcla05c5wcbCNYPnygRQoLBYb

});

// create topic variables

var topicArray = [ 
    "Leonardo Da Vinci",
    "Gustav Klimt",
    "Vincent van Gogh",
    "Henri Matisse",
    "Claude Monet",
    "Vermeer",
    "Frida Kahlo",
    "Rene Magritte",
    "Salvador Dalí",
    "Pablo Picasso",
 ];
  // need function to clear exsisting boxes on reload
  $("#buttonArea").empty();

// page loads with 10 exsisting buttons and search box for user input
    // use a loop that appends a button for each string in the array
    function createButtons(){

        for ( var i = 0; i < topicArray.length; i++ ) {
            var buttons = $("<button>" + topicArray[i] + "</button>")
            buttons.appendTo("#buttonArea");
                
            };
        }        
    
// buttons link to giphy to pull 10 gifs for the selected topic
    // gifs are displayed in a grid in the appropriate div (#"displayArea")
        // initally the gif should be static
        // upon clicking the gif should animate
     // another click stops the animation
// Below each gif must also display the following:
    // its rating provided by the GIPHY API
     
//COMPLETE THE ABOVE STEPS BEFORE CONTIUING TO THE NEXT STEPS 

//   create a form that takes the value from user input and adds it to the "gifTopic" array
        $(".form-group").on("click", function(event) {
            var artist = $(   ).val.trim();
            topicArray.push(artist);

            createButtons();
        });
        
// create a function that takes each topic in the array and remakes the buttons on the page prepending the user values to the list