const Ship = require('./ship.js');

class Gameboard {
    ships = [];

    coordinates = [];

    missedShots = [];

    constructor() {
        for (var i = 0; i < 10; i++) {
            var row = [];
            for (var j = 0; j < 10; j++) {
                row.push(null);
            }
            this.coordinates.push(row);
        }
    }

    addShip(x, y, axis, ship) {
        if (this.verifyPlacement(x, y, ship.length, axis)) {
            if (axis === 1) {
                var end = [x + ship.length, y];
                for (var i = x; i < end[0]; i++) {
                    this.coordinates[i][y] = ship;
                }
            } else if (axis === 0) {
                var end = [x, y + ship.length];
                for (var i = y; i < end[1]; i++) {
                    this.coordinates[x][i] = ship;
                }
            }
            // adds a new ship to the gameboard
            this.ships.push(ship);
            return true;
        } else return false;
    }

    verifyPlacement(x, y, length, axis) {
        if (axis === 1) {
            var end = [x + length, y];
            for (var i = x; i < end[0]; i++) {
                let value;
                try {
                    value = this.coordinates[i][y];
                } catch(TypeError) {
                    return false
                } finally {
                    if (value !== null) return false;
                }
            }
        } else if (axis === 0) {
            var end = [x, y + length];
            for (var i = y; i < end[1]; i++) {
                let value;
                try {
                    value = this.coordinates[x][i];
                } catch(TypeError) {
                    return false
                } finally {
                    if (value !== null) return false;
                }
            }
        }
        return true;
    }

    receiveAttack(x, y) {
        var hit = this.coordinates[x][y] !== null;
        if (hit) {
            var ship = this.coordinates[x][y];
            ship.hit();
            var sunk = ship.isSunk();
            return {
                "ship_name": ship.name,
                "ship_sunk": sunk,
                "hit": true,
            };

        } else {
            this.missedShots.push([x, y]);
            return false;
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

module.exports = Gameboard;