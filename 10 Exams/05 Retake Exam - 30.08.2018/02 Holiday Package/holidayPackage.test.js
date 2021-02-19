// TODO: add unit tests descriptions, refactor

const { expect } = require('chai')
const HolidayPackage = require('./holidayPackage')


describe(``, () => {
	let instance = {}

	beforeEach(() => instance = new HolidayPackage('a', 'a'))

	it(``, () => {
		expect(typeof instance).to.eq('object')
	})
	it(``, () => {
		expect(instance.insuranceIncluded).to.eq(false)
	})
	it(``, () => {
		instance.insuranceIncluded = true
		expect(instance.insuranceIncluded).to.eq(true)
	})
	it(``, () => {
		expect(() => instance.insuranceIncluded = '').to.throw('Insurance status must be a boolean')
	})

	it(``, () => {
		instance.vacationers = ['a', 'a']
		expect(instance.showVacationers()).to.eq(`Vacationers:\na\na`)
	})
	it(``, () => {
		expect(instance.showVacationers()).to.eq(`No vacationers are added yet`)
	})

	it(``, () => {
		expect(() => instance.addVacationer(' ')).to
			.throw('Vacationer name must be a non-empty string')
	})
	it(``, () => {
		expect(() => instance.addVacationer('a')).to
			.throw('Name must consist of first name and last name')
	})
	it(``, () => {
		instance.addVacationer('a a')
		expect(instance.vacationers.length).to.eq(1)
	})

	it(``, () => {
		expect(() => instance.generateHolidayPackage()).to
			.throw('There must be at least 1 vacationer added')
	})
	it(``, () => {
		instance.vacationers = ['a a']
		expect(instance.generateHolidayPackage()).to.eq('Holiday Package Generated\n' +
			'Destination: ' + 'a' + '\n' +
			'Vacationers:\n' + 'a a' + '\n' +
			'Price: 400')
	})
	it(``, () => {
		instance.vacationers = ['a a']
		instance.season = 'Summer'
		expect(instance.generateHolidayPackage()).to.eq('Holiday Package Generated\n' +
			'Destination: ' + 'a' + '\n' +
			'Vacationers:\n' + 'a a' + '\n' +
			'Price: 600')
	})
	it(``, () => {
		instance.vacationers = ['a a']
		instance.season = 'Summer'
		instance.insuranceIncluded = true
		expect(instance.generateHolidayPackage()).to.eq('Holiday Package Generated\n' +
			'Destination: ' + 'a' + '\n' +
			'Vacationers:\n' + 'a a' + '\n' +
			'Price: 700')
	})
	it(``, () => {
		instance.vacationers = ['a a', 'b b']
		expect(instance.generateHolidayPackage()).to.eq('Holiday Package Generated\n' +
			'Destination: ' + 'a' + '\n' +
			'Vacationers:\n' + 'a a' + '\n' + 'b b' + '\n' +
			'Price: 800')
	})
})