import { newGame } from "../views/newGame";
const Gameboard = require("../models/gameboard.js");
const Ship = require("../models/ship.js");
const random_coords = require("../controllers/ship_coordinates.js");

// start the game
const start = document.querySelector(".start .button");
start.addEventListener("click", () => newGame("newGame"));

// generate gameboards 

const human = new Gameboard();

const cpu = new Gameboard();

// generate ships
let ships = [
    {
        "name": "Cruiser",
        "length": 2
    },
    {
        "name": "Submarine",
        "length": 3
    },
    {
        "name": "Destroyer",
        "length": 3
    },
    {
        "name": "Battleship",
        "length": 4
    },
    {
        "name": "Carrier",
        "length": 5
    },
];

// cpu 
for (var i = 0; i < 5; i++) {
    let ship = new Ship(ships[i]["name"], ships[i]["length"]);
    var state = false;
    while (!state) {
        let coords = random_coords(ship.length);
        state = cpu.addShip(coords["x"], coords["y"], coords["axis"], ship);
    }
}

