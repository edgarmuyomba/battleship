import { cpu, person } from "../views/newGame";

function toggleTurn() {
    if (person.turn) {
        cpu.turn = true;
        person.turn = false;
    }
    else {
        person.turn = true;
        cpu.turn = false;
    }
}

export { toggleTurn };