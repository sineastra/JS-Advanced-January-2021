function foo (arr) {
	const data = {}

	arr.forEach(x => {
		const [brand, model, q] = x.split(' | ')

		data[brand] = data[brand] || {}
		data[brand][model] = data[brand][model] || 0
		data[brand][model] += Number(q)
	})

	return Object.entries(data).map(([brand, models]) => `${brand}
${Object.entries(models)
		.map(([model, quantity]) => `###${model} -> ${quantity}`)
		.join('\n')}`).join('\n')
}