import { newGame } from "../views/newGame";
const Gameboard = require("../models/gameboard.js");
import { auto_placement } from "./ship_placement.js";

// start the game
const start = document.querySelector(".start .button");
start.addEventListener("click", () => newGame("newGame"));

// generate gameboards 

const human = new Gameboard();

const computer = new Gameboard();

// generate ships
auto_placement(computer);

auto_placement(human);

console.log(computer.coordinates);

export { computer, human };