class ChristmasDinner {
	budget
	constructor (b) {
		this._budget = b
		this.dishes = []
		this.products = []
		this.guests = {}
	}

	set _budget (v) {
		if (v < 0)
			throw new Error('The budget cannot be a negative number')

		this.budget = v
	}

	getDish = (dishName) => this.dishes.find(x => x.recipeName === dishName)

	shopping (p) {
		if (this.budget < p[1]) throw new Error('Not enough money to buy this product')

		this.products.push(p[0])
		this.budget -= p[1]

		return `You have successfully bought ${p[0]}!`
	}

	recipes ({ recipeName, productsList }) {
		if (productsList.every(x => this.products.includes(x))) {
			this.dishes.push({ recipeName, productsList })
			return `${recipeName} has been successfully cooked!`
		} else
			throw new Error('We do not have this product')

	}

	inviteGuests (name, dish) {
		if (this.guests[name] !== undefined)
			throw new Error('This guest has already been invited')
		if (this.getDish(dish) === undefined)
			throw new Error('We do not have this dish')

		this.guests[name] = dish

		return `You have successfully invited ${name}!`
	}

	showAttendance () {
		return Object.entries(this.guests)
			.map(([name, dish]) => `${name} will eat ${dish}, which consists of ${
				this.getDish(dish).productsList.join(', ')
			}`).join('\n')
	}
}
