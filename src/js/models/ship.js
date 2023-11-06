class Ship {
    length;
    hits = 0;
    name;

    constructor(name, length) {
        this.length = length;
        this.name = name;
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