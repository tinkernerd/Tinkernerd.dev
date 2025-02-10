"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-04

    Chess Board Drag and Drop
    
    Author: Nick Stull
    Date: 2024/11/29

    Filename: project10-04.js
*/

// Page Objects
let pieces = document.getElementsByTagName("span");
let boardSquares = document.querySelectorAll("table#chessboard td");
let whiteBox = document.getElementById("whiteBox");
let blackBox = document.getElementById("blackBox");

// Make pieces draggable and set up dragstart event
for (let piece of pieces) {
    piece.draggable = true;
    piece.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text", event.target.id);
    });
}

// Add dragover and drop event handlers for board squares
for (let square of boardSquares) {
    // Allow dropping by preventing default dragover behavior
    square.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    // Handle drop events
    square.addEventListener("drop", (event) => {
        event.preventDefault();

        // Get the ID of the dragged piece from the dataTransfer object
        let pieceID = event.dataTransfer.getData("text");
        let movingPiece = document.getElementById(pieceID);

        if (event.target.tagName === "TD") {
            // If dropping on an empty square, append the piece
            event.target.appendChild(movingPiece);
        } else if (event.target.tagName === "SPAN") {
            // If dropping on another piece
            let occupyingPiece = event.target;
            let square = occupyingPiece.parentElement;

            // Place the moving piece in the square
            square.appendChild(movingPiece);

            // Move the occupying piece back to the chess box
            if (occupyingPiece.classList.contains("white")) {
                whiteBox.appendChild(occupyingPiece);
            } else if (occupyingPiece.classList.contains("black")) {
                blackBox.appendChild(occupyingPiece);
            }
        }
    });
}
