// TODO: refactor the class

class Parking {
	constructor (c) {
		this.capacity = c
		this.vehicles = []
	}

	findByCarNumber = n => this.vehicles.find(x => x.carNumber === n)

	addCar (carModel, carNumber) {
		if (this.capacity - 1 < 0) throw new Error('Not enough parking space.')

		this.capacity -= 1
		this.vehicles.push({ carModel, carNumber, payed: false })

		return `The ${carModel}, with a registration number ${carNumber}, parked.`
	}

	removeCar (c) {
		const car = this.findByCarNumber(c)

		if (car === undefined)
			throw new Error(`The car, you're looking for, is not found.`)
		if (car.payed === false)
			throw new Error(`${c} needs to pay before leaving the parking lot.`)
		this.vehicles.splice(this.vehicles.indexOf(car), 1)
		this.capacity += 1

		return `${c} left the parking lot.`
	}

	pay (c) {
		const car = this.findByCarNumber(c)

		if (car === undefined)
			throw new Error(`${c} is not in the parking lot.`)
		if (car.payed === true)
			throw new Error(`${c}'s driver has already payed his ticket.`)
		car.payed = true

		return `${c}'s driver successfully payed for his stay.`
	}

	sortByCarNumber = (c, c1) => c.carNumber.localeCompare(c1.carNumber)
	printCarInfo = (c) => `${c.carModel} == ${c.carNumber} - ${c.payed
		? `Has payed`
		: `Not payed`}`

	getStatistics (carNumber) {
		if (carNumber === undefined) {

			return `The Parking Lot has ${this.capacity} empty spots left.
${this.vehicles.sort(this.sortByCarNumber)
				.map(this.printCarInfo)
				.join('\n')}`
		} else {
			const car = this.findByCarNumber(carNumber)

			return this.printCarInfo(car)
		}
	}
}