function clickFeedback(data) { // data: { hit: true, cell: cell, gameOver: true }
    if (data["gameOver"]) {
        // end the game, last target is the loser!
        const boards = document.querySelector("div.boards");
        boards.style = "display: none;";

        const gameOver = document.querySelector("div.gameOver");
        gameOver.style = "";
    } else {
        var cell = data["cell"];
        if (data["hit"]) {
            // paint the cell red
            cell.innerHtml = `
                                <div class="content">
                                    <div class="hit"></div>
                                </div>
                            `;
        } else {
            // paint the cell according to the target
            cell.innerHtml = `
                                <div class="content">
                                    <div class="miss"></div>
                                </div>
                            `;
        }
    }
}

export { clickFeedback };