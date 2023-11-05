const Gameboard = require('../src/models/gameboard.js');
const Ship = require('../src/models/ship.js');

function testLength(x, y, length, coordinates) {
    for (let i=x; i<=(x+length); i++) {
        if (coordinates[i][y] === null) return false;
    }
    return true;
}

test("Add ship works", () => {
    var gameboard = new Gameboard();
    var my_ship = new Ship(5);

    gameboard.addShip(2, 3, my_ship);

    expect(gameboard.ships.length).toBe(1);
    expect(gameboard.ships).toContainEqual(my_ship);
    expect(testLength(2, 3, 5, gameboard.coordinates)).toBeTruthy();
})

test("Receive attack works!", () => {
    var gameboard = new Gameboard();
    var my_ship = new Ship(5);

    gameboard.addShip(2, 3, my_ship);
    gameboard.receiveAttack(1, 1);
    gameboard.receiveAttack(2, 3);

    expect(gameboard.missedShots).toContainEqual([1,1]);
    expect(my_ship.hits).toBe(1);
})

test("All Sunk works!", () => {
    var gameboard = new Gameboard();
    var my_ship = new Ship(5);

    gameboard.addShip(2, 3, my_ship);
    
    gameboard.receiveAttack(2, 3);
    expect(gameboard.allSunk()).toBeFalsy();
    gameboard.receiveAttack(3,3);
    gameboard.receiveAttack(4,3);
    gameboard.receiveAttack(5,3);
    gameboard.receiveAttack(6,3);
    expect(gameboard.allSunk()).toBeTruthy();
})