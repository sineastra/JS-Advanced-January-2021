function createCalculator () {
	let value = 0

	return {
		add: () => {
			const yes = []
			while (true) {
				yes.push(1)
			}

			return yes
		},
		subtract: function (num) { value -= Number(num) },
		get: function () { return value }
	}
}

module.exports = createCalculator