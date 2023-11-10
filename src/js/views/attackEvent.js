import { GAMEOVER } from "../controllers/gameLoop";

function clickFeedback(data) { // data: { target: human, hit: true, ship_sunk: true, ship_name: "Cruiser", cell: cell, gameOver: true }
    var cell = data["cell"];
    if (data["hit"]) {
        // paint the cell red
        cell.innerHTML = `
                                <div class="content">
                                    <div class="hit"></div>
                                </div>
                            `;
    } else {
        // paint the cell according to the target
        cell.innerHTML = `
                                <div class="content">
                                    <div class="miss"></div>
                                </div>
                            `;
    }

    if (data["ship_sunk"]) updateShipYard({ "target": data["target"], "ship_name": data["ship_name"] });

    // update global gameover variable
    GAMEOVER["state"] = data["gameOver"];
    // GAMEOVER["state"] = true;
}

function updateShipYard(data) { // data { target: human, ship_name: cruiser }
    const view_ships = document.querySelectorAll(`.${data["target"]} .ships > p`);
    view_ships.forEach((ship) => {
       if (ship.classList[0] === data['ship_name'].toLowerCase()) {
        ship.classList.add("hit");
       }
    })
}

export { clickFeedback };