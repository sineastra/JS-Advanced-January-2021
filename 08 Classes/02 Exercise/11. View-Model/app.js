class Textbox {
	constructor (selector, regex) {
		this._value = ''
		this._elements = document.querySelectorAll(selector)
		this._invalidSymbols = regex
	}

	get value () {
		return this._value
	}

	set value (v) {
		this._elements = this._elements.map(x => v)
		this._value = v
	}

	get elements () {
		return this._elements
	}

	isValid = () => this._invalidSymbols.test(this.value)
}

let textbox = new Textbox('.textbox', /[^a-zA-Z0-9]/)
let inputs = document.querySelectorAll('.textbox')

inputs.forEach(x => x.addEventListener('input', function () {console.log(x.value)}))
