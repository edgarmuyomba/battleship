import { cpu } from "./gameLoop";
import { receiveClick } from "./attack_controller";

function cpuMove() {
    if (!cpu.turn) return;
    // getting a random cell to attack
    var coords = randPoint();
    while (cpu.attacks_made.includes([coords["x"], coords["y"]])) {
        coords = randPoint();
    }
    console.log(coords);
    var cell = findCell(coords["x"], coords["y"]);

    console.log(cell);
    
    //simulate the click
    // receiveClick({ "target": "human", "cell": cell });
}

function findCell(x, y) {
    var rowNo = x;
    var cellNo = y;
    
    let row = document.querySelector(`.human tr.${rowNo}`);
    let cell = row.querySelector(`td.cell.${cellNo}`);

    return cell;
}

function randPoint() {
    return {
        "x": Math.floor(1 + (Math.random() * 10)),
        "y": Math.floor(1 + (Math.random() * 10))
    }
}

cpuMove();