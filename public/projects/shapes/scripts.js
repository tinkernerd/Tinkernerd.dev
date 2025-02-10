/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Nick Stull
      Date:   09.14.2023
      Github Repo: tinkernerd/ISYS115

      Filename: project02-03.js
 */

["square", "triangle", "circle"].forEach(function(shape) {
    document.getElementById(shape).addEventListener("mouseover", function() {
        document.getElementById("feedback").innerHTML = "Wow, you managed to hover over the " + shape + ". Congratulations, I guess. ";
    });
    document.getElementById(shape).addEventListener("mouseout", function() {
        document.getElementById("feedback").innerHTML = "";
    });
});

