
/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Nick Stull
      Date:   09.14.2024
      
      Github Repo: tinkernerd/ISYS115

      Filename: project02-01.js
      * The JavaScript code provided is for a Celsius to Fahrenheit and Fahrenheit to Celsius converter with
      * additional functionality to update the header color based on the temperature values entered.
      * @param degree - The `degree` parameter in the provided JavaScript code represents the temperature
      * value that needs to be converted between Celsius and Fahrenheit. It is used as input to the
      * conversion functions `FahrenheitToCelsius` and `CelsiusToFahrenheit` to perform the temperature
      * conversions. The `degree` parameter is a
      * @returns The code provided is a JavaScript program for a Celsius to Fahrenheit and Fahrenheit to
      * Celsius converter. It includes functions to convert temperatures between Celsius and Fahrenheit,
      * event handlers for input changes in the Celsius and Fahrenheit input fields, and a function to
      * update the color of the header based on the temperature values.
 */

//Functions to change stuff
// Function to convert Fahrenheit to Celsius
function FahrenheitToCelsius(degree) {
  return parseFloat(((degree - 32) / 1.8).toFixed(2));
}

// Function to convert Celsius to Fahrenheit
function CelsiusToFahrenheit(degree) {
  return parseFloat((degree * 1.8 + 32).toFixed(2));
}
// Adding onchange event handler to the element with id "cValue"
document.getElementById("cValue").onchange = function () {
  // Get the value of the element with id "cValue"
  var cDegree = parseFloat(document.getElementById("cValue").value);

  // Set the value of the element with id "fValue" to the converted temperature
  var fDegree = CelsiusToFahrenheit(cDegree);
  document.getElementById("fValue").value = fDegree;

  // Log the change
  logChange(cDegree, fDegree);
};

// Adding onchange event handler to the element with id "fValue"
document.getElementById("fValue").onchange = function () {
  // Get the value of the element with id "fValue"
  var fDegree = parseFloat(document.getElementById("fValue").value);

  // Set the value of the element with id "cValue" to the converted temperature
  var cDegree = FahrenheitToCelsius(fDegree);
  document.getElementById("cValue").value = cDegree;
};

document.addEventListener("DOMContentLoaded", function () {
  const fValueInput = document.getElementById("fValue");
  const cValueInput = document.getElementById("cValue");
  const header = document.querySelector("header");

  function updateHeaderColor() {
    const fValue = parseFloat(fValueInput.value);
    const cValue = parseFloat(cValueInput.value);

    if (cValue < 0 || fValue < 32) {
      header.classList.add("blue");
      header.classList.remove("yellow", "red");
    } else if (cValue > 26 || fValue > 80) {
      //header.classList.remove("yellow", "blue");
      header.classList.add("red");
      header.classList.remove("yellow", "blue");
    } else {
      header.classList.add("yellow");
      header.classList.remove("blue", "red");
    }
  }

  function convertFtoC() {
    const fValue = parseFloat(fValueInput.value);
    const cValue = ((fValue - 32) * 5) / 9;
    cValueInput.value = cValue.toFixed(2);
    updateHeaderColor();
  }

  function convertCtoF() {
    const cValue = parseFloat(cValueInput.value);
    const fValue = (cValue * 9) / 5 + 32;
    fValueInput.value = fValue.toFixed(2);
    updateHeaderColor();
  }

  fValueInput.addEventListener("input", convertFtoC);
  cValueInput.addEventListener("input", convertCtoF);

  // Initial check
  updateHeaderColor();
});
