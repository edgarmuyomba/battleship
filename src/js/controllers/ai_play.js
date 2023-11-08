import { cpu } from "../views/newGame";
import { receiveClick } from "./attack_controller";
import { clickFeedback } from "../views/attackEvent";
import { toggleTurn } from "./turns";

function cpuMove() {
    if (!cpu.turn) return;
    // getting a random cell to attack
    var cell = getCell();
    console.log(cpu.attacks_made);

    //simulate the click 
    var attack = receiveClick({ "target": "human", "cell": cell });
    while (attack["message"]) { // similar cell clicked
        // get a new cell and try click again
        cell = getCell();
        attack = receiveClick({ "target": "human", "cell": cell });
    }
    clickFeedback(attack);
    // change to human after playing
    toggleTurn();
}

function getCell() {
    // finding the random cell to attack
    var coords = randPoint();
    while (cpu.check_attack(coords["x"], coords["y"])) {
        coords = randPoint();
    }
    var cell = findCell(coords["x"], coords["y"]);
    return cell;
}

function findCell(x, y) {
    var rowNo = x;
    var cellNo = y;

    let row = document.querySelector(`.human tr.row-${rowNo}`);
    let cell = row.querySelector(`td.cell-${cellNo}`);

    return cell;
}

function randPoint() {
    return {
        "x": Math.floor(1 + (Math.random() * 10)),
        "y": Math.floor(1 + (Math.random() * 10))
    }
}

export { cpuMove };