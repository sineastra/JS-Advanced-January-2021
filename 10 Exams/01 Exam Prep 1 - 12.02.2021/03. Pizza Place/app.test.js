const { expect } = require('chai')
const pizzUni = require('./app')

describe("tests", () => {

	describe("makeAnOrder", () =>{
		it(".orderedPizza doesn't exist", () => {
			expect(() => pizzUni.makeAnOrder({orderedDrink: 'drink'})).to.throw('You must order at least 1 Pizza to finish the order.');
		})

		it(".orderedDrink does exist", () => {
			expect(pizzUni.makeAnOrder({orderedPizza: 'pizza', orderedDrink: 'drink'})).to.equal("You just ordered pizza and drink.");
		})

		it(".ordered drink does not exist", () => {
			expect(pizzUni.makeAnOrder({orderedPizza: 'pizza'})).to.equal(`You just ordered pizza`);
		})
	})
})


describe(`testing pizzUni functionality`, () => {
	describe(`testing .makeAnOrder() method`, () => {
		it(
			`input -> { orderedPizza: 'a' } - output -> 'You just ordered a'`,
			() => {
				expect(pizzUni.makeAnOrder({ orderedPizza: 'a' })).to
					.eq('You just ordered a')
			}
		)
		it(`input -> { orderedPizza: 'a', orderedDrink: 'b' } - 
			output -> 'You just ordered a and b.'`, () => {
			expect(pizzUni.makeAnOrder({
				orderedPizza: 'a', orderedDrink: 'b'
			})).to
				.eq('You just ordered a and b.')
		})
		it(`throws if input is not an object`, () => {
			expect(() => pizzUni.makeAnOrder(1)).to.throw()
		})
		it(`throws if inputObj.orderedPizza not present`, () => {
			expect(() => pizzUni.makeAnOrder({})).to.throw()
		})
	})

	describe(`testing .getRemainingWork() method`, () => {
		it(`happy path: input -> [{pizzaName: 'a', status: 'ready'}], 
				output -> All orders are complete!`, () => {
			expect(pizzUni.getRemainingWork([
				{
					pizzaName: 'a', status: 'ready'
				}
			])).to.eq('All orders are complete!')
		})
		it(
			`happy path: input -> [
			{ pizzaName: 'a', status: 'ready' },
			{ pizzaName: 'b', status: 'preparing' },
			{ pizzaName: 'c', status: 'preparing' },
		}], 
				output -> The following pizzas are still preparing: b, c.`,
			() => {
				expect(pizzUni.getRemainingWork([
					{ pizzaName: 'a', status: 'ready', },
					{ pizzaName: 'b', status: 'preparing' },
					{ pizzaName: 'c', status: 'preparing' },
				])).to.eq('The following pizzas are still preparing: b, c.')
			}
		)
		it(`throws if input not array`, () => {
			expect(() => pizzUni.getRemainingWork(1)).to.throw()
		})
	})

	describe(`testing .orderType() method`, () => {
		it(`input -> [1, 'Carry Out'], output -> 0.9`, () => {
			expect(pizzUni.orderType(1, 'Carry Out')).to.eq(0.9)
		})
		it(`input -> [1, 'Delivery'], output -> 1`, () => {
			expect(pizzUni.orderType(1, 'Delivery')).to.eq(1)
		})
	})
})