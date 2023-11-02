class Gameboard {
    ships = [];

    coordinates = [];

    missedShots = [];

    constructor() {
        for (var i=0; i < 8; i++) {
            var row = [];
            for (var j=0; j<8; j++) {
                row.add(null);
            }
            this.coordinates.add(row);
        }
    }

    addShip(x, y) {
        // adds a new ship to the gameboard
        var newShip = new Ship();
        this.ships.add(newShip);

        var end = [[x+newShip.length][y]];

        for (var i=x; i<end[0]+1; i++) {
            this.coordinates[i][y] = newShip;
        }
    }

    receiveAttack(x, y) {
        var hit = this.coordinates[x][y] !== null;
        if (hit) {
            var ship = this.coordinates[x][y];
            ship.hit();
        } else {
            this.missedShots.add([x, y]);
        }
    }

    allSunk() {
        // keeps track of all gameboard ships for sinking
        for (let ship of this.ships) {
            if (!ship.isSunk()) return false;
        }
        return true;
    }
}