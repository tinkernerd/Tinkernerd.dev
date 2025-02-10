/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Nick Stull
      Date:   2024.09.24
      
      Github Repo: tinkernerd/ISYS115 

      Filename: project03-01.js
*/

// Declare a variable named menuItems containing the collection of HTML elements belonging to the menuItem class using the getElementsByClassName() method.
var menuItems = document.getElementsByClassName("menuItem");
// Add an event listener to each item in the menuItems collection. When an item is clicked, run the calcTotal() function.
for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", calcTotal, false);
}

// Function to calculate the total cost of the customer order given the selected menu items
function calcTotal() {
    var orderTotal = 0;
    for (var i = 0; i < menuItems.length; i++) {
        if (menuItems[i].checked) {
            orderTotal += Number(menuItems[i].value);
        }
    }
    document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}
    
 // Function to display a numeric value as a text string in the format $##.## 

 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }