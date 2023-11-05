class Player {
    score = 0;
    turn = false;
    ai = false;
    attacks_made = [];

    attack(gameboard, x, y) {
        gameboard.receiveAttack(x, y);
    }
}

module.exports = Player;