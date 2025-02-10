"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Nick Stull
      Date: 2024/11/29  

      Filename: project12-03.js
*/

document.querySelectorAll("article > h2").forEach(heading => {
      heading.addEventListener("click", () => {
            let $heading = $(heading);
            let $list = $heading.next();
            let $headingImage = $heading.children("img");

            $list.slideToggle(500);

            if ($headingImage.attr("src") === "plus.png") {
                  $headingImage.attr("src", "minus.png");
            } else {
                  $headingImage.attr("src", "plus.png");
            }
      });
});
