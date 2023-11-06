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


module.exports = valid_coords;