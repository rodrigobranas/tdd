/*

String Calculator

"" = 0 OK
"10" = 10
"1,2" = 3
"1,2,3,4,5,6,7,8,9" = 45
null = exception

*/

const stringCalculatorService = require("./StringCalculatorService");
const chai = require("chai");
const expect = chai.expect;

describe("String Calculator Test", function () {

    it("Should return zero if the string is empty", function () {
        const result = stringCalculatorService.sum("");
        expect(result).to.be.equal(0);
    });

    it("Should return the same number if the string contains only one number", function () {
        const result = stringCalculatorService.sum("10");
        expect(result).to.be.equal(10);
    });

    it("Should return the sum of two numbers", function () {
        const result = stringCalculatorService.sum("1,2");
        expect(result).to.be.equal(3);
    });

    it("Should return the sum of more than two numbers", function () {
        const result = stringCalculatorService.sum("1,2,3,4,5,6,7,8,9");
        expect(result).to.be.equal(45);
    });

    it("Should throw an exception if the string is null", function () {
        expect(function () {
            stringCalculatorService.sum(null);
        }).to.throw("Invalid text")
    });
});