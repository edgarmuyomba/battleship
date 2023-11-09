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

let i = 0;
let current = ships[i];

const updateCurr = () => {
    current = ships[++i];
}

function placeShip(coords) { // coords = { x: , y: }

    updateCurr();
}

function removeClass(cell) {
    var coords = findCoords(cell); // coords = { x: , y: }

    var _cells = [];
    for (let i = coords["x"]; i < coords["x"] + current["length"]; i++) {
        if (valid_coords(coords["x"], i, 0, current.length)) {
            let _cell = findCell(coords["x"] + 1, i + 1);
            _cells.push(_cell);
        } else {
            console.log("Invalid cell");
        };
    }
    // console.log(_cells);
    _cells.forEach((_cell) => {
        _cell.classList.remove("hover");
    })
}

function highlightCells(cell) { 
    var coords = findCoords(cell); // coords = { x: , y: }

    var _cells = [];
    for (let i = coords["x"]; i < coords["x"] + current["length"]; i++) {
        if (valid_coords(coords["x"], i)) {
            let _cell = findCell(coords["x"] + 1, i + 1);
            _cells.push(_cell);
        } else {
            console.log("Invalid cell");
        };
    }
    // console.log(_cells);
    _cells.forEach((_cell) => {
        _cell.classList.add("hover");
    })
}

cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
        highlightCells(cell);
    });

    // cell.addEventListener("mouseleave", () => {
    //     removeClass(cell);
    // });

    cell.addEventListener("click", () => {
        var coords = findCoords(cell);
        placeShip(coords);
    });
});


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
    let cell = row.querySelector(`td.cell-${cellNo}`);

    return cell;
}
