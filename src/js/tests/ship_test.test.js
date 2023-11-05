const Ship = require("../src/models/ship.js")

test("Hit works", () => {
    var my_ship = new Ship(10);
    my_ship.hit();
    expect(my_ship.hits).toBe(1);
})

test("Sinking works", () => {
    var my_ship = new Ship(5);
    for (let i=0; i<5; i++) my_ship.hit();
    expect(my_ship.isSunk()).toBeTruthy();
})

test("Sinking not works", () => {
    var my_ship = new Ship(5);
    for (let i=0; i<3; i++) my_ship.hit();
    expect(my_ship.isSunk()).toBeFalsy();
})