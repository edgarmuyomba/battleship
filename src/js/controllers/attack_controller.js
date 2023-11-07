import { c_cells, h_cells } from "./gameLoop.js";
import { computer, human } from "../views/newGame.js";

// handling clicks

function receiveClick(data) { // data: { target: human, cell: cell }
    const target = data["target"];
    const cell = data["cell"];

    // target -> objects map
    const map = {
        "human": [h_cells, human],
        "computer": [c_cells, computer]
    };

    // triangulate coordinates
    var cellNo = parseInt(cell.classList[0].split('-')[1]) - 1;
    var rowNo = Math.floor(map[target][0].indexOf(cell) / 10);

    // modify gameboard
    if (!map[target][1][`${rowNo}, ${cellNo}`]) {
        map[target][1][`${rowNo}, ${cellNo}`] = true;
        var attack = map[target][1].receiveAttack(rowNo, cellNo);
        var gameOver = map[target][1].allSunk();
        return {
            "target": target,
            "cell": cell,
            "gameOver": gameOver,
            ...attack
        };
    }

}

export { receiveClick };