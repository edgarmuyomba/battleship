const valid_coords = require("./ship_coordinates");
const Ship = require("../models/ship");

var h_cells = [];

let rows = document.querySelectorAll(".new_board table tr");
for (let i = 0; i < 10; i++) {
    var row = rows[i];
    let _cells = row.querySelectorAll("td[class^='cell']");
    h_cells.push(..._cells)
}

const ships = [
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

const cells = document.querySelectorAll(".new_board td[class^='cell']");

for (let ship of ships) {
    placeShip(ship);
}

function placeShip(ship) {
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            var coords = findCoords(cell);
            console.log(ship);
            return;
        });
    })
}

function findCoords(cell) {
    // triangulate coordinates
    var cellNo = parseInt(cell.classList[0].split('-')[1]) - 1;
    var rowNo = Math.floor(h_cells.indexOf(cell) / 10);
    return {
        "x": rowNo,
        "y": cellNo
    }
}

