// const process = require('process');
// const { robotFinalPosition } = require('./helper/helper');

import process from "process";
import { robotFinalPosition } from "./helper/helper.js";


const gridLength = 10,
  gridWidth = 10;

let move = process.argv[2],
  xaxis = gridLength - 1,
  yaxis = 0; // South-West corner of the grid
let moveStr = move.split(" ");

// calling the main function
robotFinalPosition(moveStr, xaxis, yaxis, gridLength, gridWidth);
