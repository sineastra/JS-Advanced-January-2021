const { expect } = require('chai')
const dealership = require('./dealership')

describe(``, () => {
	describe(`newCarCost() method`, () => {
		it(`have fixed discount based on model old car returned`, () => {
			expect(dealership.newCarCost('Audi A4 B8', 15001)).to.eq(1)
		})
	})

	describe(`carEquipment() method`, () => {
		it(
			`returns correctly the indexes passed as second argument, from array passed as first`,
			() => {
				expect(dealership.carEquipment(['a', 'b'], [0, 1])).to.deep.equal(['a', 'b'])
			}
		)
	})

	describe(`euroCategory() method`, () => {
		it(`no discount below category <= 4`, () => {
			expect(dealership.euroCategory(3)).to
				.equal('Your euro category is low, so there is no discount from the final price!')
		})
		it(`category => 4 , discount 5%`, () => {
			expect(dealership.euroCategory(4)).to
				.equal(`We have added 5% discount to the final price: 14250.`)
		})
	})
})