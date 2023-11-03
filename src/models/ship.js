class Ship {
    length;
    hits = 0;
    constructor(length) {
        this.length = length;
    }

    hit() {
        this.hits++;
    }

    isSunk() {
        if (this.length === this.hits) return true;
        return false;
    }
}

module.exports = Ship;