import { human } from "../views/newGame";
import { autoPlacement, playGame } from "../views/newGame";
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
const name = document.querySelector("p.instruction span");

let i = 0;
let current = ships[i];
let axis = 0;

const updateCurr = () => {
    if (i + 1 > 4) {
        setTimeout(() => playGame(), 700);
    }
    else {
        current = ships[++i];
        name.textContent = current.name;
        axis = 0;
    }
}

function placeShip(cell) {
    var coords = findCoords(cell);
    let ship = new Ship(current["name"], current["length"]);
    var state = human.addShip(coords["x"], coords["y"], axis, ship);
    if (state) {
        display_ship(cell);
        updateCurr();
    }
}

function highlightCells(cell) {
    var coords = findCoords(cell); // coords = { x: , y: }

    var _cells = [];

    if (axis === 0) { // horizontal
        for (let i = coords["y"]; i < coords["y"] + current["length"]; i++) {
            let _cell = findCell(coords.x + 1, i + 1);
            if (_cell) {
                _cells.push(_cell);
            } else return;
        }
    } else if (axis === 1) { // vertical
        for (let i = coords["x"]; i < coords["x"] + current["length"]; i++) {
            let _cell = findCell(i + 1, coords.y + 1);
            if (_cell) {
                _cells.push(_cell);
            } else return;
        }
    }

    _cells.forEach((cell) => {
        cell.classList.add("hover");
    })
}

function display_ship(cell) {
    // display the ship on the board
    var coords = findCoords(cell);

    var _cells = [];

    if (axis === 0) { // horizontal
        for (let i = coords["y"]; i < coords["y"] + current["length"]; i++) {
            let _cell = findCell(coords.x + 1, i + 1);
            if (_cell) {
                _cells.push(_cell);
            } else return;
        }
    } else if (axis === 1) { // vertical
        for (let i = coords["x"]; i < coords["x"] + current["length"]; i++) {
            let _cell = findCell(i + 1, coords.y + 1);
            if (_cell) {
                _cells.push(_cell);
            } else return;
        }
    }

    _cells.forEach((cell) => {
        cell.classList.add("ship");
    })
}

function removeClasses(cell) {
    var coords = findCoords(cell); // coords = { x: , y: }

    if (axis === 0) { // horizontal
        for (let i = coords["y"]; i < coords["y"] + current["length"]; i++) {
            let _cell = findCell(coords.x + 1, i + 1);
            if (_cell) {
                _cell.classList.remove("hover");
            } else return;
        }
    } else if (axis === 1) { // vertical
        for (let i = coords["x"]; i < coords["x"] + current["length"]; i++) {
            let _cell = findCell(i + 1, coords.y + 1);
            if (_cell) {
                _cell.classList.remove("hover");
            } else return;
        }
    }
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

function findCell(x, y) {
    var rowNo = x;
    var cellNo = y;

    let row = document.querySelector(`.new_board tr.row-${rowNo}`);
    if (row) {
        let cell = row.querySelector(`td.cell-${cellNo}`);
        return cell;
    } else {
        return row;
    }

}

// ability to auto place the ships
const auto_place = document.querySelector(".new_board .auto");
auto_place.addEventListener("click", () => autoPlacement());

// rotate ship's axis
const rotate = document.querySelector(".new_board button.rotate");
rotate.addEventListener("click", () => {
    axis = axis === 0 ? 1 : 0;
});

// placing a ship
cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
        highlightCells(cell);
    });

    cell.addEventListener("mouseleave", () => {
        removeClasses(cell);
    });

    cell.addEventListener("click", () => {
        placeShip(cell);
    });
});