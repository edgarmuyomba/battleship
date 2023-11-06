function valid_coords(x, y, axis, length) { // axis: 0 - horizontal, 1 - vertical
    if ((x < 1) || (y < 1) || (x > 10) || (y > 10)) return false;
    if (axis === 0) {
        // horizontal
        if ((x + length) > 10) return false;
        return true;
    } else if (axis === 1) {
        // vertical
        if ((y + length) > 10) return false;
        return true;
    }
}

function random_coords(length) {
    // used to generate random coordinates for ship placement
    const axis = Math.floor(Math.random() * 1);
    var x = -1;
    var y = -1;
    
    while(!valid_coords(x, y, axis, length)) {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
    }
    return {
        "axis": axis,
        "x": x,
        "y": y
    }
}


module.exports = valid_coords;
module.exports = random_coords;