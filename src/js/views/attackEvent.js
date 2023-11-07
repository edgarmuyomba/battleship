function clickFeedback(data) { // data: { target: human, hit: true, ship_sunk: true, cell: cell, gameOver: true }
    console.log(data);
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

export { clickFeedback };