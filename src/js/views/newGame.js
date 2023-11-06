function newGame(state) { // either gameOver or newGame
    if (state === "gameOver") {
        const gameOver = document.querySelector("div.game-container");
        gameOver.style.display = "none";
    } else if (state === "newGame") {
        const start = document.querySelector("div.start");
        const boards = document.querySelector("div.boards");

        start.style.display = "none";
        boards.style.display = "";
    }
}

export { newGame };