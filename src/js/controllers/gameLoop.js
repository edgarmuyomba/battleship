import { Gameboard } from "../models/gameboard";
import { Ship } from "../models/ship";
import { newGame } from "../views/newGame";

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
for (var i=0; i<5; i++) {
    let ship = new Ship(ships[i]["name"], ships[i]["length"]);
    
}