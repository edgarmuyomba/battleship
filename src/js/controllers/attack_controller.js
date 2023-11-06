import { clickFeedback } from "../views/attackEvent.js";

const Gameboard = require("../models/gameboard.js");

// human gameboard and cells

const human = new Gameboard();

var h_cells = [];

(function fetchCells() {
    let rows = document.querySelectorAll(".human table tr");
    for (let i = 1; i <= 10; i++) {
        var row = rows[i];
        let _cells = row.querySelectorAll("td.cell");
        h_cells.push(..._cells)
    }
})();


// computer gameboard and cells 

const cpu = new Gameboard();

var c_cells = [];

(function fetchCells() {
    let rows = document.querySelectorAll(".computer table tr");
    for (let i = 1; i <= 10; i++) {
        var row = rows[i];
        let _cells = row.querySelectorAll("td.cell");
        c_cells.push(..._cells)
    }
})();

// human_gb clicked

const h_attacks = {}; // keep track of previous attacks made

h_cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        var attack = receiveClick({"target": "human", "cell": cell});
        clickFeedback(attack);
    });
});


// cpu_gb clicked

const c_attacks = {}; // keep track of previous attacks made

c_cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        var attack = receiveClick({"target": "cpu", "cell": cell});
        clickFeedback(attack);
    });
});


// handling clicks

function receiveClick(data) { // data: { target: human, cell: cell }
    const target= data["target"];
    const cell = data["cell"];

    // target -> objects map
    const map = {
        "human": [h_cells, h_attacks, human],
        "cpu": [c_cells, c_attacks, cpu]
    };


    // triangulate coordinates
    var cellNo = parseInt(cell.classList[1]);
    var rowNo = Math.floor(map[target][0].indexOf(cell) / 10) + 1;

    // modify gameboard
    if (!map[target][1][`${rowNo}, ${cellNo}`]) {
        map[target][1][`${rowNo}, ${cellNo}`] = true;
        var attack = map[target][2].receiveAttack(rowNo, cellNo);
        var gameOver = map[target][2].allSunk();
        return {
            "target": target,
            "cell": cell,
            "hit": attack,
            "gameOver": gameOver
        };
    }

}