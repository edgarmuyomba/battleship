const Gameboard = require("../models/gameboard.js");

const human = new Gameboard();

var cells = [];

(function fetchCells() {
    let rows = document.querySelectorAll(".human table tr");
    for (let i = 1; i <= 10; i++) {
        var row = rows[i];
        let _cells = row.querySelectorAll("td.cell");
        cells.push(..._cells)
    }
})();

// trying to map document cells to gameboard coordinates

function viewToCellMap(cell) {
    var cellNo = parseInt(cell.classList[1]);
    var rowNo = Math.floor(cells.indexOf(cell) / 10) + 1;
    console.log(rowNo, cellNo);
}

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        viewToCellMap(cell);
        cell.innerHTML = `
                            <div class="content">
                                <div class="hit">
                                </div>
                            </div>
                        `;
    })
})