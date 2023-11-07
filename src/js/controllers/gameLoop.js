import { newGame } from "../views/newGame";
const Gameboard = require("../models/gameboard.js");
import { auto_placement } from "./ship_placement.js";
const Player = require("../models/player.js");

// start the game
const start = document.querySelector(".start .button");
start.addEventListener("click", () => newGame("newGame"));

// generate gameboards 

const human = new Gameboard();

const computer = new Gameboard();

// generate ships
auto_placement(computer);

auto_placement(human);

// create players
const person = new Player();
person.turn = true;

const cpu = new Player();
cpu.ai = true;
// cpu.turn = true;

// game control
var gameOver = false;

console.log(computer.coordinates);

export { computer, human, cpu, person };