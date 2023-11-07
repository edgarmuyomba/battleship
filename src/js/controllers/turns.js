import { cpu, person } from "./gameLoop";

function toggleTurn() {
    if (person.turn) cpu.turn = true;
    else person.turn = true;
}

export { toggleTurn };