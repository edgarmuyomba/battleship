import Gameboard from "../models/gameboard";
import Player from "../models/player";

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

    // generate ships
    auto_placement(computer);

    auto_placement(human);

    // new boards and players
    human = new Gameboard();
    computer = new Gameboard();
    person = new Player();
    cpu = new Player();

}

export { newGame, human, computer, person, cpu };