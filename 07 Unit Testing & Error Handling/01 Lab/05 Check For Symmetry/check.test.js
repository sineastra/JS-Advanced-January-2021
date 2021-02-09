const { expect } = require('chai')
const isSymmetric = require('./check')

describe(`check if array is symmetric`, () => {
    it(`input -> [0,0] -> true`, () => {
        expect(isSymmetric([1, 1])).to.equal(true)
    })
    it(`input -> [0,1] -> false`, () => {
        expect(isSymmetric([0, 1])).to.equal(false)
    })
    it(`input -> 'a' -> false`, () => {
        expect(isSymmetric('')).to.equal(false)
    })
    it(`input -> [] -> true`, () => {
        expect(isSymmetric([1, 1, 1])).to.equal(true)
    })
    it(`input -> [1, '1'] -> false`, () => {
        expect(isSymmetric([1, '1'])).to.equal(false)
    })
})