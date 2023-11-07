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

    if (data["gameOver"]) {
        setTimeout(() => {
            // end the game, last target is the loser!
            const gameOver = document.querySelector("div.game-container");
            let winner = gameOver.querySelector("div.winner");

            let _winner = data["target"] === "human" ? "CPU" : "You";
            winner.textContent = `${_winner} won this round`;
            gameOver.style = "";
        }, 3000); 
    }
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