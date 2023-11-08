import Gameboard from "../models/gameboard";
import Player from "../models/player";
import { auto_placement } from "../controllers/ship_placement";
import { playRound } from "../controllers/gameLoop";

// generate gameboards 
var human = new Gameboard();

var computer = new Gameboard();

// create players
var person = new Player();

var cpu = new Player();

function newGame(state) { // either gameOver or newGame
    if (state === "gameOver") {
        const gameOver = document.querySelector("div.game-container");
        gameOver.style.display = "none";
    } else if (state === "newGame") {
        const start = document.querySelector("div.start");
        const boards = document.querySelector("div.boards");

        start.style.display = "none";
        boards.style.display = "";
    }

    // clear cells
    const cells = document.querySelectorAll("td[class^='cell']");
    for (let cell of cells) {
        cell.innerHTML = '';
    }

    // new boards and players
    human = new Gameboard();
    computer = new Gameboard();
    person = new Player();
    cpu = new Player();

    // generate ships
    auto_placement(computer);

    auto_placement(human);

    // start the game
    var c_cells = [];

    (function fetchCells() {
        let rows = document.querySelectorAll(".computer table tr");
        for (let i = 1; i <= 10; i++) {
            var row = rows[i];
            let _cells = row.querySelectorAll("td[class^='cell']");
            c_cells.push(..._cells)
        }
    })();
    playRound(c_cells);
}

export { newGame, human, computer, person, cpu };