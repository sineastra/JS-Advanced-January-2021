const { expect } = require('chai')
const testSuite = require('./sumOfNums')

describe('Testing Summing Function', () => {
    it('return NaN if one element of array is not a number', () => {
        expect(isNaN(testSuite.sum([1, 'a']))).to.equal(true)
    })
    it('calculates 1 element array', () => {
        expect(testSuite.sum([1])).to.equal(1)
    })
    it('calculates 2 element array', () => {
        expect(testSuite.sum([1, 1])).to.equal(2)
    })
})