class Hex {
	#value
	constructor (n) {
		this.#value = n
	}
	valueOf () { return this.#value }
	plus (number) {
		let result = this.#value + Number(number.valueOf())

		return new Hex(result)
	}
	minus (number) {
		let result = this.#value - Number(number.valueOf())

		return new Hex(result)
	}
	toString () {
		return `0x${(this.#value.toString(16)).toUpperCase()}`
	}

	parse (text) {
		return parseInt(text, 16)
	}
}