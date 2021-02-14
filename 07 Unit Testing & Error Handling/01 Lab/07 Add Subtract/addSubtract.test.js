const { expect } = require('chai')
const createCalculator = require('./addSubtract')

describe(`testing calculator functionality`, () => {
    it(`returns an object`, () => {
        expect(typeof createCalculator()).to.equals('object')
    })
    it(`return obj has method add`, () => {
        expect(createCalculator().add()).to.equals('yes')
    })
    it(`return obj has method subtract`, () => {
        expect(typeof createCalculator().subtract).to.equals('function')
    })
    it(`return obj has method get`, () => {
        expect(typeof createCalculator().get).to.equals('function')
    })
    it(`internal sum cannot be modified`, () => {
        expect(createCalculator().value).to.equals(undefined)
    })
    it(`add method adds parsable input`, () => {
        const calc = createCalculator()
        calc.add('1')
        expect(calc.get()).to.equals(1)
    })
    it(`subtract method subtracts parsable input`, () => {
        const calc = createCalculator()
        calc.add('2')
        calc.subtract('1')
        expect(calc.get()).to.equals(1)
    })
})