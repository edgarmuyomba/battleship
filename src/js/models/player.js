class Player {
    score = 0;
    turn = false;
    ai = false;
    attacks_made = {};

    attack(gameboard, x, y) {
        gameboard.receiveAttack(x, y);
        this.attacks_made.push([x,y]);
    }

    set_score() {
        this.score++;
    }

    get_score() {
        return this.score;
    }

    add_attack(x, y) {
        this.attacks_made[`${x}, ${y}`] = true;
    }

    check_attack(x, y) {
        return this.attacks_made[`${x}, ${y}`] ?? false;
    }
}

module.exports = Player;