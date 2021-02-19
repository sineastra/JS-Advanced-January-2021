class ChristmasDinner {
	budget
	dishes
	products
	guests
	constructor (b) {
		this._budget = b
		this.dishes = []
		this.products = []
		this.guests = {}
	}

	set _budget (n) {
		if (n < 0) {
			throw new Error('The budget cannot be a negative number')
		}

		this.budget = n
	}

	shopping ([name, price]) {
		if (price > this.budget) {
			throw new Error('Not enough money to buy this product')
		}

		this.products.push(name)
		this.budget -= price

		return `You have successfully bought ${name}!`
	}

	recipes ({ recipeName, productsList }) {
		if (! productsList.every(product => this.products.includes(product))) {
			throw new Error('We do not have this product')
		}

		this.dishes.push({ recipeName, productsList })

		return `${recipeName} has been successfully cooked!`
	}

	inviteGuests (name, dish) {
		if (this.guests[name] !== undefined)
			throw new Error('This guest has already been invited')
		if (this.dishes.find(x => x.recipeName === dish) === undefined)
			throw new Error('We do not have this dish')

		this.guests[name] = dish

		return `You have successfully invited ${name}!`
	}

	showAttendance () {
		return Object.entries(this.guests).map(
			([name, dish]) => `${name} will eat ${dish}, which consists of ${
				this.dishes.find(x => x.recipeName === dish).productsList.join(', ')}`)
			.join('\n')
	}
}