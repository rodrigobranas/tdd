/*

Número primo é um número maior que 1, que seja divisível por 1 e ele mesmo.

2, 3, 5, 7

1 - 0 não é primo
2 - 1 não é primo
3 - 2 é primo
4 - 3, 5, 6 são primos...

*/

const primesService = require("./PrimesService");
const chai = require("chai");
const expect = chai.expect;

describe("Primes Test", function () {

    this.timeout(5000);

    it("Should not be prime: 0", function () {
        expect(primesService.isPrime(0)).to.be.false;
    });

    it("Should not be prime: 1", function () {
        expect(primesService.isPrime(1)).to.be.false;
    });

    it("Should be prime: 2", function () {
        expect(primesService.isPrime(2)).to.be.true;
    });

    it("Should be prime: 3", function () {
        expect(primesService.isPrime(3)).to.be.true;
    });

    it("Should not be prime: 4", function () {
        expect(primesService.isPrime(4)).to.be.false;
    });

    it("Should be prime: 5", function () {
        expect(primesService.isPrime(5)).to.be.true;
    });

    it("Should not be prime: 6", function () {
        expect(primesService.isPrime(6)).to.be.false;
    });

    it("Should be prime: 7", function () {
        expect(primesService.isPrime(7)).to.be.true;
    });

    it("Should not be prime: 8", function () {
        expect(primesService.isPrime(8)).to.be.false;
    });

    it("Should not be prime: 9", function () {
        expect(primesService.isPrime(9)).to.be.false;
    });

    it("Should be prime: 613", function () {
        expect(primesService.isPrime(613)).to.be.true;
    });

    it("Should be prime: 608999999", function () {
        expect(primesService.isPrime(608999999)).to.be.true;
    });
});