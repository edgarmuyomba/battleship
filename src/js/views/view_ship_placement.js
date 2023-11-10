import { findCell } from "../controllers/ai_play";

function display_ships(gameboard) {
    const coordinates = gameboard.coordinates;

    for (var i=0; i<10; i++) {
        for (var j=0; j<10; j++) {
            if (coordinates[i][j] !== null) {
                let cell = findCell(i+1, j+1);
                cell.classList.add("ship");
            }
        }
    }
}

export { display_ships };