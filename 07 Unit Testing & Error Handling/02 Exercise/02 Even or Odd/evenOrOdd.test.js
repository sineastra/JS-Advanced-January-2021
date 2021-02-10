const { expect } = require('chai')
const isOddOrEven = require('./evenOrOdd')


describe(`checks if length of passed string is odd or even`, () => {
    it(`inout -> (a) -> odd`, () => {
        expect(isOddOrEven('a')).to.eq('odd')
    })
    it(`input -> aa -> even`, () => {
        expect(isOddOrEven('aa')).to.eq('even')
    })
    it(`input -> 1 -> undefined`, () => {
        expect(isOddOrEven(1)).to.eq(undefined)
    })
    it(`input -> [a,a] -> undefined`, () => {
        expect(isOddOrEven(['a', 'a'])).to.eq(undefined)
    })
})