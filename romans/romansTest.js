/*

1 - I
2 - II
3 - III
4 - IV
5 - V
9 - IX
10 - X
50 - L
100 - C
500 - D
1000 - M

*/

const romansService = require("./RomansService");
const chai = require("chai");
const expect = chai.expect;

describe("Romans Test", function () {
    it("Should convert 1 to I", function () {
        expect(romansService.convert(1)).to.be.equal("I");
    });

    it("Should convert 2 to II", function () {
        expect(romansService.convert(2)).to.be.equal("II");
    });

    it("Should convert 3 to III", function () {
        expect(romansService.convert(3)).to.be.equal("III");
    });

    it("Should convert 4 to IV", function () {
        expect(romansService.convert(4)).to.be.equal("IV");
    });

    it("Should convert 2017 to MMXVII", function () {
        expect(romansService.convert(2017)).to.be.equal("MMXVII");
    });

    it("Should convert 4999 to MMMMDCCCCLXXXXIX", function () {
        expect(romansService.convert(4999)).to.be.equal("MMMMDCCCCLXXXXIX");
    });

    it("Should convert 49 to XLIX", function () {
        expect(romansService.convert(49)).to.be.equal("XLIX");
    });
});