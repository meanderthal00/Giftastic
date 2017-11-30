$(function () {
    // testing path
    console.log("I work");
    // API KEY: wZtZQpZDcla05c5wcbCNYPnygRQoLBYb

});

// create topic variables
var gifTopic = {
    myArray: [],

}
// page loads with 10 exsisting buttons and search box for user input
// use a loop that appends a button for each string in the array
// need function to clear exsisting boxes on reload
// buttons are rendered  into correct div ("#buttonArea")from the array above
// buttons link to giphy to pull 10 gifs for the selected topic
// gifs are displayed in a grid in the appropriate div (#"displayArea")
// initally the gif should be static
// upon clicking the gif should animate
// another click stops the animation
// Below each gif must also display the following:
// its rating
// provided by the GIPHY API
//COMPLETE THE ABOVE STEPS BEFORE CONTIUING TO THE NEXT STEPS 

//   create a form that takes the value from user input and adds it to the "gifTopic" array
// create a function that takes each topic in the array and remakes the buttons on the page prepending the user values to the list