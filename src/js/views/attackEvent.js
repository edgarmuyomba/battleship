function clickFeedback(data) { // data: { hit: true, cell: cell, gameOver: true }
    if (data["gameOver"]) {
        // end the game, last target is the loser!
        console.log("Game Over!!!");
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