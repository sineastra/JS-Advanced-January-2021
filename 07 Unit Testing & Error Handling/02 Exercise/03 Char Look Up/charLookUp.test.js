const { expect } = require('chai')
const lookupChar = require('./charLookUp')

describe(`retrieves character at index from string parameter`, () => {
    it(`valid input -> (a, 0) -> a`, () => {
        expect(lookupChar('a', 0)).to.eq('a')
    })
    it(`valid input -> (ab, 1) -> b`, () => {
        expect(lookupChar('ab', 1)).to.eq('b')
    })
    it(`invalid input - second param not Integer -> (a, 1.1) -> undefined`, () => {
        expect(lookupChar('a', 1.1)).to.be.undefined
    })
    it(`invalid input - first param not string -> (0,0) -> undefined`, () => {
        expect(lookupChar(0, 0)).to.be.undefined
    })
    it(`invalid input - second param not number -> (a,a) -> undefined`, () => {
        expect(lookupChar('a', 'a')).to.be.undefined
    })
    it(`invalid input - index negative -> (a,-1) -> 'Incorrect index'`, () => {
        expect(lookupChar('a', -1)).to.eq('Incorrect index')
    })
    it(`invalid input - index out of bounds -> (a,1) -> 'Incorrect index'`, () => {
        expect(lookupChar('a', 1)).to.eq('Incorrect index')
    })
})