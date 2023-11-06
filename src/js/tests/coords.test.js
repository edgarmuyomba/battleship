const valid_coords = require("../controllers/ship_coordinates.js");
const random_coords = require("../controllers/ship_coordinates.js");

test("Valid Coords works!", () => {
    var coords1 = [0, 1, 0, 3];
    var coords2 = [1, 0, 0, 3];
    var coords3 = [5, 1, 0, 7];
    var coords4 = [1, 6, 1, 7];

    expect(valid_coords(coords1[0], coords1[1], coords1[2], coords1[3])).toBeFalsy();
    expect(valid_coords(coords2[0], coords2[1], coords2[2], coords2[3])).toBeFalsy();
    expect(valid_coords(coords3[0], coords3[1], coords3[2], coords3[3])).toBeFalsy();
    expect(valid_coords(coords4[0], coords4[1], coords4[2], coords4[3])).toBeFalsy();
});

test.only("Random Coords Workds!", () => {
    var coords = random_coords(7);
    expect(valid_coords(coords["x"], coords["y"], coords["axis"], 7)).toBeTruthy();
    coords = random_coords(9);
    expect(valid_coords(coords["x"], coords["y"], coords["axis"], 9)).toBeTruthy();
    coords = random_coords(3);
    expect(valid_coords(coords["x"], coords["y"], coords["axis"], 3)).toBeTruthy();
    coords = random_coords(1);
    expect(valid_coords(coords["x"], coords["y"], coords["axis"], 1)).toBeTruthy();
})