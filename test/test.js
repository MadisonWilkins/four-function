var assert = require('assert');
var calculate = require('../public/javascripts/functions.mjs')

describe('Operations', function () {
    describe('Add', function () {
        it('Should return the sum of two numbers when addition is selected', function () {
            assert.equal(calculate(1, "add", 1), 2);
            assert.equal(calculate(1, "add", 4), 5);
            assert.equal(calculate(3, "add", 1), 4);
            assert.equal(calculate(2, "add", 2), 4);
        });
    });
    describe('Subtract', function () {
        it('Should return the difference between two numbers when subtraction is selected', function () {
            assert.equal(calculate(1, "subtract", 1), 0);
            assert.equal(calculate(1, "subtract", 4), -3);
            assert.equal(calculate(3, "subtract", 1), 2);
            assert.equal(calculate(2, "subtract", 2), 0);
        });
    });
    describe('Multiply', function () {
        it('Should return the product of two numbers when multiplication is selected', function () {
            assert.equal(calculate(1, "multiply", 1), 1);
            assert.equal(calculate(1, "multiply", 4), 4);
            assert.equal(calculate(3, "multiply", 1), 3);
            assert.equal(calculate(2, "multiply", 2), 4);
        });
    });
    describe('Divide', function () {
        it('Should return the quotient of two numbers when division is selected', function () {
            assert.equal(calculate(1, "divide", 1), 1);
            assert.equal(calculate(1, "divide", 4), .25);
            assert.equal(calculate(3, "divide", 1), 3);
            assert.equal(calculate(2, "divide", 2), 1);
        });
    });
});