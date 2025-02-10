"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-01

      Project to retrieve the Astronomy Picture of the Day from NASA
      Author: Nick Stull
      Date:  2024/11/20

      Filename: project11-01.js
*/

let imageBox = document.getElementById("nasaImage");
let dateBox = document.getElementById("dateBox");

dateBox.onchange = function() {
    // Declare the dateStr variable and set it equal to the value of the dateBox element
    let dateStr = dateBox.value;

    // Fetch the data from the NASA API
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dateStr}`)
        .then(response => response.json()) // Parse the JSON text string
        .then(json => showPicture(json)) // Pass the JSON object to showPicture
        .catch(error => console.error(error)); // Display any errors in the console
};

// Create the showPicture() function
function showPicture(json) {
    // If the media type is a video
    if (json.media_type === "video") {
        imageBox.innerHTML = `<iframe src="${json.url}"></iframe>
                              <h1>${json.title}</h1>
                              <p>${json.explanation}</p>`;
    } 
    // If the media type is an image
    else if (json.media_type === "image") {
        imageBox.innerHTML = `<img src="${json.url}" />
                              <h1>${json.title}</h1>
                              <p>${json.explanation}</p>`;
    } 
    // For other media types
    else {
        imageBox.innerHTML = "Image not Available";
    }
}
