import { newGame, human, cpu, person, computer } from "../views/newGame";
import { cpuMove } from "./ai_play.js";
import { toggleTurn } from "./turns.js";
import { clickFeedback } from "../views/attackEvent.js";
import { receiveClick } from "./attack_controller.js";

// start the game
const start = document.querySelector(".start .button");
start.addEventListener("click", () => newGame("newGame"));

newGame("newGame");

// game control

// human gameboard and cells

var h_cells = [];

(function fetchCells() {
    let rows = document.querySelectorAll(".human table tr");
    for (let i = 1; i <= 10; i++) {
        var row = rows[i];
        let _cells = row.querySelectorAll("td[class^='cell']");
        h_cells.push(..._cells)
    }
})();


// computer gameboard and cells 

var c_cells = [];

(function fetchCells() {
    let rows = document.querySelectorAll(".computer table tr");
    for (let i = 1; i <= 10; i++) {
        var row = rows[i];
        let _cells = row.querySelectorAll("td[class^='cell']");
        c_cells.push(..._cells)
    }
})();

// computer_gb clicked

const GAMEOVER = {
    "state": false
}; // global variable

function playRound(c_cells) {
    person.turn = true;

    // wait for user click
    c_cells.forEach((cell) => {
        cell.addEventListener('click', () => {
            if (person.turn) {
                var attack = receiveClick({ "target": "computer", "cell": cell });
                clickFeedback(attack);
                // check for gameover
                if (GAMEOVER["state"]) endGame();
                // switch to cpu turn
                toggleTurn();
                // cpu play
                setTimeout(cpuMove, 500);
                // check for gameover
                if (GAMEOVER["state"]) endGame();
            }
        });
    });
}

// start the game
playRound(c_cells);


// game ended
function endGame() {
    if (GAMEOVER["state"]) {
        person.turn = false;
        cpu.turn = false;
        setTimeout(() => {
            // end the game, last target is the loser!
            const gameOver = document.querySelector("div.game-container");
            let winner = gameOver.querySelector("div.winner");

            let _winner = person.turn ? "CPU" : "You";
            winner.textContent = `${_winner} won this round`;
            gameOver.style = "";
        }, 500);
    }
}

// restarting the game
const playAgain = document.querySelector(".gameOver > p.button");
playAgain.addEventListener("click", () => newGame("gameOver"));

export { GAMEOVER, c_cells, h_cells, playRound };