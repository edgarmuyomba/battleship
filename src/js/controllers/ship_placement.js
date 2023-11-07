const Ship = require("../models/ship.js");
const random_coords = require("../controllers/ship_coordinates.js");

function auto_placement(gameboard) { 
    let ships = [
        {
            "name": "Cruiser",
            "length": 2
        },
        {
            "name": "Submarine",
            "length": 3
        },
        {
            "name": "Destroyer",
            "length": 3
        },
        {
            "name": "Battleship",
            "length": 4
        },
        {
            "name": "Carrier",
            "length": 5
        },
    ];
 
    for (var i = 0; i < 5; i++) {
        let ship = new Ship(ships[i]["name"], ships[i]["length"]);
        var state = false;
        while (!state) {
            let coords = random_coords(ship.length);
            state = gameboard.addShip(coords["x"], coords["y"], coords["axis"], ship);
        }
    }
}

export { auto_placement };