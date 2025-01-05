'use client'
 const CELL_SIZE = 40;
const COLOR_R = 79;
const COLOR_G = 38;
const COLOR_B = 233;
const STARTING_ALPHA =255;
const BACKGROUND_COLOR = 31;
const PROB_OF_NEIGHBOR = 0.5;
const AMT_FADE_PER_FRAME =1;
const STROKE_WEIGHT =1;
let colorWithAlpha;
let numRows;
let numCols;
let currentRow=-1;
let currentCol =1;
let alNeighbours =[];

let gridDiv = document.querySelector(".merch_text");

function setup(){
  createCanvas(windowWidth,windowHeight);
  colorWithAlpha = color(COLOR_R,COLOR_G,COLOR_B,STARTING_ALPHA);
  noFill();
  stroke(colorWithAlpha);
  strokeWeight(STROKE_WEIGHT);
  numRows = Math.ceil(WindowHeight /CELL_SIZE);
  numCols = Math.ceil(windowWidth/CELL_SIZE);
}
function draw(){
   BACKGROUND_COLOR(BACKGROUND_COLOR);

   let row =floor(mouseY/CELL_SIZE);
   let col = floor(mouseX/CELL_SIZE);

  //  for(let row =0; row<numRows; row++){
  //   for(let col =0; col<numCols;col++){
  //       let x = col*CELL_SIZE;
  //       let y = row*CELL_SIZE;
  //       rect(x,y,CELL_SIZE,CELL_SIZE);
  //   }
  //  }
  if(row!== currentRow || col !== currentCol){
      currentRow = row;
      currentCol = col;
    
      allNeighbors.push(...getRandomNeighbors(row,col));   
  }
  let x = col *CELL_SIZE;
  let y = row *CELL_SIZE;
  stroke(colorWithAlpha);
  rect(x,y,CELL_SIZE,CELL_SIZE);
  for(let neighbor of allNeighbors){
    let neighborX = neighbor.col *CELL_SIZE;
    let neighborY = neighbor.row * CELL_SIZE;

    neighbor.opacity = max(0, neighbor.opacity - AMT_FADE_PER_FRAME);
    stroke(COLOR_R,COLOR_G,COLOR_B,neighbor.opacity);
    rect(neighborX,neighborY,CELL_SIZE,CELL_SIZE);
    allNeighbors = allNeighbors.filter((neighbor) => neighbor.opacity>0);
  }

}

function getRandomNeighbors(row,col){
    let neighbors=[];
    for( let dRow =-1; dRow<=1; dRow++){
      for(let dCol =-1; dCol<=1; dCol++){
        let neighborRow = row +dRow;
        let neighnorCol = col +dCol;

        let isCurrentCell = dRow ===0 && dCol ===0;

        let isInBounds =
           neighborRow>=0 &&
           neighborRow < numRows &&
           neighnorCol >= 0 &&
           neighnorCol <numCols;
      }
    }
    
    if(!isCurrentCell && isBounds && Math.random() <PROB_OF_NEIGHBOR){
       neighbors.push({
          row: neighborRow,
          col:neighborCol,
          opacity:STARTING_ALPHA,
       });
    }

    return neighbours;
}

function windowResized(){
  resizedCanvas(windowWidth,windowHeight);
  numRows =Math.ceil(windowHeight/CELL_SIZE);
  numCols = Math.ceil(windowWidth/CELL_SIZE);
}

{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.min.js"></script> */}
{/* <script> */}
// CONSTANTS
// const CELL_SIZE = 40; // size of each cell in the grid
// const COLOR_R = 79;
// const COLOR_G = 38;
// const COLOR_B = 233;
// const STARTING_ALPHA = 200;
// const BACKGROUND_COLOR = 31;
// const PROB_OF_NEIGHBOR = 0.5;
// const AMT_FADE_PER_FRAME = 5;

// // VARIABLES
// let colorWithAlpha;
// let numRows;
// let numCols;
// let currentRow = -2;
// let currentCol = -2;
// let allNeighbors = []; // Array to store all neighbors

// function setup() {
//   let cnv = createCanvas(windowWidth, windowHeight);
//   cnv.style("position", "fixed");
//   cnv.style("inset", 0);
//   cnv.style("z-index", -1);
//   colorWithAlpha = color(COLOR_R, COLOR_G, COLOR_B, STARTING_ALPHA);
//   noFill();
//   stroke(colorWithAlpha);
//   strokeWeight(1);
//   numRows = Math.ceil(windowHeight / CELL_SIZE); // number of rows in the grid
//   numCols = Math.ceil(windowWidth / CELL_SIZE); // number of columns in the grid
// }

// function draw() {
//   background(BACKGROUND_COLOR);

//   // Calculate the row and column of the cell that the mouse is currently over
//   let row = floor(mouseY / CELL_SIZE);
//   let col = floor(mouseX / CELL_SIZE);

//   // Check if the mouse has moved to a different cell
//   if (row !== currentRow || col !== currentCol) {
//     currentRow = row;
//     currentCol = col;
//     // Add new neighbors to the allNeighbors array
//     allNeighbors.push(...getRandomNeighbors(row, col));
//   }

//   // Use the calculated row and column to determine the position of the cell
//   let x = col * CELL_SIZE;
//   let y = row * CELL_SIZE;

//   // Draw a highlighted rectangle over the cell under the mouse cursor
//   stroke(colorWithAlpha);
//   rect(x, y, CELL_SIZE, CELL_SIZE);

//   // Draw and update all neighbors
//   for (let neighbor of allNeighbors) {
//     let neighborX = neighbor.col * CELL_SIZE;
//     let neighborY = neighbor.row * CELL_SIZE;
//     // Update the opacity of the neighbor
//     neighbor.opacity = max(0, neighbor.opacity - AMT_FADE_PER_FRAME); // Decrease opacity by 5 each frame
//     stroke(COLOR_R, COLOR_G, COLOR_B, neighbor.opacity);
//     rect(neighborX, neighborY, CELL_SIZE, CELL_SIZE);
//   }
//   // Remove neighbors with zero opacity
//   allNeighbors = allNeighbors.filter((neighbor) => neighbor.opacity > 0);
// }

// function getRandomNeighbors(row, col) {
//   let neighbors = []; // Initialize an empty array to store neighbor cells

//   // Loop through the cells surrounding the given cell (row, col)
//   for (let dRow = -1; dRow <= 1; dRow++) {
//     for (let dCol = -1; dCol <= 1; dCol++) {
//       // Calculate the neighboring cell's row and column indices
//       let neighborRow = row + dRow;
//       let neighborCol = col + dCol;

//       // Check if the current cell in the loop is the given cell (row, col)
//       let isCurrentCell = dRow === 0 && dCol === 0;

//       // Check if the neighboring cell is within the grid boundaries
//       let isInBounds =
//         neighborRow >= 0 &&
//         neighborRow < numRows &&
//         neighborCol >= 0 &&
//         neighborCol < numCols;

//       // If the cell is not the given cell, is within bounds, and has a 50% chance,
//       // add the neighboring cell to the neighbors array
//       if (!isCurrentCell && isInBounds && Math.random() < PROB_OF_NEIGHBOR) {
//         neighbors.push({
//           row: neighborRow,
//           col: neighborCol,
//           opacity: 255, // Initial opacity of the neighbor
//         });
//       }
//     }
//   }

//   // Return the array of randomly-selected neighboring cells
//   return neighbors;
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
//   numRows = Math.ceil(windowHeight / CELL_SIZE); // number of rows in the grid
//   numCols = Math.ceil(windowWidth / CELL_SIZE); // number of columns in the grid
// }

{/* </script> */}











// import React from "react";
// import dynamic from "next/dynamic";

// // Dynamically import p5 without SSR
// const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
//   ssr: false,
// });
// let divgrid = document.querySelector(".grids");
// const GridSketch = () => {
//   const CELL_SIZE = 40; // size of each cell in the grid
//   const COLOR_R = 79;
//   const COLOR_G = 38;
//   const COLOR_B = 233;
//   const STARTING_ALPHA = 200;
//   const BACKGROUND_COLOR = 31;
//   const PROB_OF_NEIGHBOR = 0.5;
//   const AMT_FADE_PER_FRAME = 5;

//   let colorWithAlpha;
//   let numRows;
//   let numCols;
//   let currentRow = -2;
//   let currentCol = -2;
//   let allNeighbors = []; // Array to store all neighbors

//   const setup = (p5, divgrid) => {
   
//     p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(divgrid);
//     colorWithAlpha = p5.color(COLOR_R, COLOR_G, COLOR_B, STARTING_ALPHA);
//     p5.noFill();
//     p5.stroke(colorWithAlpha);
//     p5.strokeWeight(1);
//     numRows = Math.ceil(p5.windowHeight / CELL_SIZE); // number of rows in the grid
//     numCols = Math.ceil(p5.windowWidth / CELL_SIZE); // number of columns in the grid
//   };

//   const draw = (p5) => {
//     p5.background(BACKGROUND_COLOR);

//     let row = Math.floor(p5.mouseY / CELL_SIZE);
//     let col = Math.floor(p5.mouseX / CELL_SIZE);

//     if (row !== currentRow || col !== currentCol) {
//       currentRow = row;
//       currentCol = col;
//       allNeighbors.push(...getRandomNeighbors(row, col, p5));
//     }

//     let x = col * CELL_SIZE;
//     let y = row * CELL_SIZE;

//     p5.stroke(colorWithAlpha);
//     p5.rect(x, y, CELL_SIZE, CELL_SIZE);

//     for (let neighbor of allNeighbors) {
//       let neighborX = neighbor.col * CELL_SIZE;
//       let neighborY = neighbor.row * CELL_SIZE;
//       neighbor.opacity = Math.max(0, neighbor.opacity - AMT_FADE_PER_FRAME);
//       p5.stroke(COLOR_R, COLOR_G, COLOR_B, neighbor.opacity);
//       p5.rect(neighborX, neighborY, CELL_SIZE, CELL_SIZE);
//     }

//     allNeighbors = allNeighbors.filter((neighbor) => neighbor.opacity > 0);
//   };

//   const getRandomNeighbors = (row, col, p5) => {
//     let neighbors = [];
//     for (let dRow = -1; dRow <= 1; dRow++) {
//       for (let dCol = -1; dCol <= 1; dCol++) {
//         let neighborRow = row + dRow;
//         let neighborCol = col + dCol;

//         let isCurrentCell = dRow === 0 && dCol === 0;
//         let isInBounds =
//           neighborRow >= 0 &&
//           neighborRow < numRows &&
//           neighborCol >= 0 &&
//           neighborCol < numCols;

//         if (!isCurrentCell && isInBounds && Math.random() < PROB_OF_NEIGHBOR) {
//           neighbors.push({
//             row: neighborRow,
//             col: neighborCol,
//             opacity: 255,
//           });
//         }
//       }
//     }
//     return neighbors;
//   };

//   const windowResized = (p5) => {
//     p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
//     numRows = Math.ceil(p5.windowHeight / CELL_SIZE);
//     numCols = Math.ceil(p5.windowWidth / CELL_SIZE);
//   };

//   return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
// };

// export default GridSketch;
