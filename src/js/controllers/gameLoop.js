import { newGame } from "../views/newGame";
const Gameboard = require("../models/gameboard.js");
import { auto_placement } from "./ship_placement.js";

// start the game
const start = document.querySelector(".start .button");
start.addEventListener("click", () => newGame("newGame"));

// generate gameboards 

const human = new Gameboard();

const cpu = new Gameboard();

// generate ships
auto_placement(cpu);

auto_placement(human);

console.log(cpu.coordinates);

export { cpu, human };