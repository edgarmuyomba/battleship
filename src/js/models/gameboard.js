const Ship = require('./ship.js');

class Gameboard {
    ships = [];

    coordinates = [];

    missedShots = [];

    constructor() {
        for (var i=0; i<10; i++) {
            var row = [];
            for (var j=0; j<10; j++) {
                row.push(null);
            }
            this.coordinates.push(row);
        }
    }

    addShip(x, y, ship) {
        // adds a new ship to the gameboard
        this.ships.push(ship);
        
        var end = [x+ship.length,y];

        for (var i=x; i<=end[0]; i++) {
            this.coordinates[i][y] = ship;
        }
    }

    receiveAttack(x, y) {
        var hit = this.coordinates[x][y] !== null;
        if (hit) {
            var ship = this.coordinates[x][y];
            ship.hit();
        } else {
            this.missedShots.push([x, y]);
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

var gameboard = new Gameboard();
var my_ship = new Ship(5);

gameboard.addShip(2, 3, my_ship);
gameboard.receiveAttack(1, 1);

function testLength(x, y, length, coordinates) {
    for (let i=x; i<=(x+length); i++) {
        if (coordinates[i][y] === null) return false;
    }
    return true;
}

// console.log(testLength(2,3,5, gameboard.coordinates));

// console.log(gameboard.missedShots);

module.exports = Gameboard;