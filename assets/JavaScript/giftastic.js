$(function () {
    // testing path
    console.log("I work");
    // API KEY: wZtZQpZDcla05c5wcbCNYPnygRQoLBYb

});

// create topic variables
var topicArray = ["Leonardo Da Vinci", "Gustav Klimt", "Vincent van Gogh", "Henri Matisse", "Claude Monet", "Vermeer", "Frida Kahlo", "Rene Magritte", "Salvador Dalí", "Pablo Picasso"]


// attempt at doing it as an object below
// var topicObject = {
//         topicArray: ["Leonardo Da Vinci", "Gustav Klimt", "Vincent van Gogh", "Henri Matisse", "Claude Monet", "Vermeer", "Frida Kahlo", "Rene Magritte", "Salvador Dalí", "Pablo Picasso"],
//         selected: " ",
//         userInput: " ",
//         giphyApi: "https://api.giphy.com/v1/gifs/search?",
//         giphyKey: "wZtZQpZDcla05c5wcbCNYPnygRQoLBYb",
// }
// // trying string literal to log the attributes of the  object
// console.log(`the array is: ${topicObject.gihyApi}`);
        // page loads with 10 exsisting buttons and search box for user input

        function createButtons() {

            //  function to clear exsisting boxes on reload    
            $("#buttonArea").empty();

            // use a loop that appends a button for each string in the array

            for (var i = 0; i < topicArray.length; i++) {

                var buttons = $("<button>");
                //  + topicArray[i] + "</button>");

                // adding class
                buttons.addClass("artist");

                // adding Data attribute
                buttons.addClass("data-name", topicArray[i]);
                // adding text with value of the i var
                buttons.text(topicArray[i]);
                // adding button to html
                $("#buttonArea").append(buttons);
            }
          
        };
        createButtons();

    //      // adding button functionality  
    //     // adding on click to created buttons
    //         $(".artist").on("click", function() {
    //             var painter = $(this).attr("data-name")

    //             var queryURL = "https://api.giphy.com/v1/gifs/search";

    //              // AJAX rquest
    //             $.ajax({
    //                 url: queryURL,
    //                 method: "GET",
    //                 data: {
    //                 api_key: "wZtZQpZDcla05c5wcbCNYPnygRQoLBYb",
    //                 limit: 10
    //                 }
    //              })
            
    //                 // data returned from API
    //             .done(function(response) {
    //             // results variable
    //             var results = response.data;

    //             // looping the returned results
    //             for (var i = 0, len = results.length; i < len; i++){
    //                 // checking the rating of the returned results
    //                 if (results[i].rating !== "r"){

    //                     // creating the div for the gifs
    //                     var gifDiv = $("<div>").addClass("item");
                        
    //                     // storing the gif's rating
    //                     var rating = results[i].rating;

    //                     // adding the p for the ratings to be displayed in
    //                     var ratingP = $("<p>").text("Rating " + rating);

    //                     // adding the image tag
    //                     var painterImage = $("<img>");

    //                     // giving the above var an appropriate src (from the data pulled from the API)
    //                     painterImage.attr("src", results[i].images.fixed_height.url);
    //                     // appending the images and ratings to the created div
    //                     gifDiv.append(ratingP);
    //                     gifDiv.append(painterImage);

    //                     // prepending the created div to the hard coded html div
    //                     $("#displayArea").prepend(gifDiv);


                        
    //                 }
    //             }  
    //         })

        $("#searchButton").on("click", function (event) {

            // preventing the form submit
            event.preventDefault();

            // grabbing the text from the #artInput text box
            var userArtist = $("#artInput").val().trim();
            // pushing user input to the array
            topicArray.push(userArtist);

            createButtons();

            // clears the input after submitting
            $("#artInput").val("");


        });
    // });    
    // createButtons();
       







        // buttons link to giphy to pull 10 gifs for the selected topic
        // gifs are displayed in a grid in the appropriate div (#"displayArea")
        // initally the gif should be static
        // upon clicking the gif should animate
        // another click stops the animation


        // Below each gif must also display the following:
        // its rating provided by the GIPHY API

        //COMPLETE THE ABOVE STEPS BEFORE CONTIUING TO THE NEXT STEPS 

        //   create a form that takes the value from user input and adds it to the "gifTopic" array

        // $(".form-group").on("click", function(event) {
        //     var artist = $("#artInput").val.trim();
        //     topicArray.push(artist);


        // });

        // create a function that takes each topic in the array and remakes the     buttons on the page prepending the user values to the list
    