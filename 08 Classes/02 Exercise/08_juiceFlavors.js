function foo (arr) {
	const juices = {}
	const bottles = {}

	const addBottles = (n, q) => {
		const btlToAdd = (q - (q % 1000)) / 1000

		if (btlToAdd > 0) {
			bottles[n] = (bottles[n] || 0) + btlToAdd
			return q % 1000
		}

		return q
	}

	arr.forEach(x => {
		const [name, quantity] = x.split(' => ')
		juices[name] = juices[name] || 0

		juices[name] = addBottles(name, juices[name] + Number(quantity))

	})

	return Object.entries(bottles)
		.map(([name, quantity]) => `${name} => ${quantity}`)
		.join('\n')
}