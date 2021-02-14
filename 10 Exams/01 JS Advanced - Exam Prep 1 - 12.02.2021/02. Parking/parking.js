// TODO: refactoring

class Parking {
	constructor (c) {
		this.capacity = Number(c)
		this.vehicles = []
	}

	addCar (c, n) {
		if (this.capacity - 1 < 0) throw new Error('Not enough parking space.')
		this.capacity -= 1

		this.vehicles.push({
			carModel: `${c}`,
			carNumber: `${n}`,
			payed: false
		})

		return `The ${c}, with a registration number ${n}, parked.`
	}

	removeCar (carNumber) {
		const i = this.vehicles.findIndex(x => x.carNumber === carNumber)
		if (i === -1)
			throw new Error(`The car, you're looking for, is not found.`)
		if (this.vehicles[i].payed === false)
			throw new Error(
				`${carNumber} needs to pay before leaving the parking lot.`
			)
		this.vehicles.splice(i, 1)
		this.capacity += 1

		return `${carNumber} left the parking lot.`
	}

	pay (carNumber) {
		const i = this.vehicles.findIndex(x => x.carNumber === `${carNumber}`)
		if (i === -1)
			throw new Error(`${carNumber} is not in the parking lot.`)
		if (this.vehicles[i].payed === true)
			throw new Error(
				`${carNumber}'s driver has already payed his ticket.`
			)

		this.vehicles[i].payed = true
		return `${carNumber}'s driver successfully payed for his stay.`
	}

	getStatistics (carNumber) {
		if (! carNumber) {
			return `The Parking Lot has ${this.capacity} empty spots left.
${this.vehicles.sort((a, b) =>
					a.carNumber.localeCompare(b.carNumber.localeCompare()))
				.map(x => `${x.carModel} == ${x.carNumber} - ${x.payed
					? `Has payed`
					: `Not payed`}`)
				.join('\n')}`
		} else {
			const car = this.vehicles.find(x => x.carNumber === carNumber)

			return `${car.carModel} == ${car.carNumber} - ${car.payed
				? `Has payed`
				: `Not payed`}`
		}
	}
}