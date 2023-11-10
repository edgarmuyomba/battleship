import Gameboard from "../models/gameboard";
import Player from "../models/player";
import { auto_placement } from "../controllers/ship_placement";
import { playRound } from "../controllers/gameLoop";
import { display_ships } from "./view_ship_placement";

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

        start.style.display = "none";
    }

    const boards = document.querySelector("div.boards");
    boards.style.display = "none";

    const new_board = document.querySelector("div.new_board");
    new_board.style.display = "";

    // new boards and players
    // human = new Gameboard();
    // computer = new Gameboard();
    // person = new Player();
    // cpu = new Player();
}

function playGame() {
    // display the ships
    display_ships(human);
    
    // generate ships
    auto_placement(computer);

    // clear cells
    const cells = document.querySelectorAll("td[class^='cell']");
    for (let cell of cells) {
        cell.innerHTML = '';
    }

    // clear shipyard
    const ships = document.querySelectorAll("div.ships > *");
    for (let ship of ships) {
        ship.classList.remove("hit");
    }

    const boards = document.querySelector("div.boards");
    const new_board = document.querySelector("div.new_board");

    new_board.style.display = "none";
    boards.style.display = "";

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

function autoPlacement() {
    auto_placement(human);
    playGame();
}

export { newGame, autoPlacement, playGame, human, computer, person, cpu };