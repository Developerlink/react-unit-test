import mapChooser from '../mapChooser';

describe("mapChooser", () => {
    it("returns and image file name based on input given to it", () => {
        let expected = "portland.jpg";
        let actual = mapChooser("portland");
        expect(actual).toEqual(expected);
    })
    it("returns a default image file name when no input given to it", () => {
        let expected = "default.jpg";
        let actual = mapChooser();
        expect(actual).toEqual(expected);
    })
});