class Vacationer {
	#fullName
	idNumber
	creditCard
	wishList
	constructor (fullName, cardInfo = [1111, '', 111]) {
		this.fullName = fullName
		this.addCreditCardInfo(cardInfo)
		this.wishList = []
		this.idNumber = this.generateIDNumber()
	}
	get fullName () {
		return this.#fullName
	}

	set fullName (arr) {
		if (arr.length !== 3)
			throw new Error('Name must include first name, middle name and last name')

		if (arr.some(x => ! /^[A-Z][a-z]+$/g.test(x)))
			throw new Error('Invalid full name')

		this.#fullName = { firstName: arr[0], middleName: arr[1], lastName: arr[2] }
	}

	generateIDNumber () {
		const additional = [
			'a', 'e', 'o', 'i', 'u'
		].includes(this.fullName.lastName.charAt(this.fullName.lastName.length - 1)) ? 8 : 7

		return `${
			((231 * this.fullName.firstName.charCodeAt(0)) +
				(139 * this.fullName.middleName.length))
		}${additional}`
	}

	addCreditCardInfo (arr) {
		if (arr.length < 3)
			throw new Error('Missing credit card information')
		if (typeof arr[0] !== 'number' || typeof arr[2] !== 'number')
			throw new Error('Invalid credit card details')

		this.creditCard = {
			cardNumber: arr[0], expirationDate: arr[1], securityNumber: arr[2]
		}
	}

	addDestinationToWishList (d) {
		if (this.wishList.includes(d))
			throw new Error('Destination already exists in wishlist')
		this.wishList.push(`${d}`)
		this.wishList.sort((a, b) => a.length - b.length)
	}

	getVacationerInfo () {
		return `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}
ID Number: ${this.idNumber}
Wishlist:
${this.wishList.length > 0 ? this.wishList.join(', ') : 'empty'}
Credit Card:
Card Number: ${this.creditCard.cardNumber}
Expiration Date: ${this.creditCard.expirationDate}
Security Number: ${this.creditCard.securityNumber}`
	}
}