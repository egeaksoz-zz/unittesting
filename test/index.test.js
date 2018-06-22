const expect = require('chai').expect;
const multiplyNumbers = require('../index.js').multiplyNumbers;

describe('Index', function () {
    describe('#multiplyNumbers()', function () {
        it('should return the result of multiplication', function () {
            let result = multiplyNumbers(4, 6);
            expect(result).to.equal(24);
        });
    });
});