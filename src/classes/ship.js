class Ship {
    length;
    hits;
    constructor(length, hits) {
        this.length = length;
        this.hits = hits;
    }

    hit() {
        this.hit++;
    }

    isSunk() {
        if (this.length === this.hits) return true;
        return false;
    }
}