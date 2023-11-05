const Gameboard = require("../models/gameboard.js");

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

const h_attacks = {};

function h_attack(cell) {
    var cellNo = parseInt(cell.classList[1]);
    var rowNo = Math.floor(h_cells.indexOf(cell) / 10) + 1;
    if (!h_attacks[`${rowNo}, ${cellNo}`]) {
        h_attacks[`${rowNo}, ${cellNo}`] = true;
        var attack = human.receiveAttack(rowNo, cellNo);
        return attack;
        // stopped here
    } else {
        // do nothing
        return false;
    }
}



export { h_cells, h_attack };