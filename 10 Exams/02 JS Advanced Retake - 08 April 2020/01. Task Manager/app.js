function solve () {
	const inputFields = [
		document.getElementById(`task`),
		document.getElementById(`description`),
		document.getElementById(`date`),
	]
	const sections = Array.from(document.getElementsByTagName('section'))
		.slice(1)
		.map(x => x.children[1])

	function articleTemplFactory (b, c, b1, c1, n, d, da) {
		const article = document.createElement('article')

		article.innerHTML = `<h3>${n}</h3><p>${d}</p>
<p>${da}</p>`
		article.innerHTML += b !== ''
			? `<div class="flex">
<button class=${c}>${b}</button>
<button class=${c1}>${b1}</button>
</div>`
			: ''

		return article
	}

	const isValidInput = (arr) => arr.every(x => x !== '')
	const remove = (e) => e.parentNode.parentNode.outerHTML = ''
	const clearInput = () => inputFields.forEach(x => x.value = '')

	const appendNewItem = (s, b, c, b1, c1, e, n, d, da) =>
		s.appendChild(articleTemplFactory(b, c, b1, c1, n, d, da))

	const add = appendNewItem.bind(undefined, sections[0], 'Start', 'green', 'Delete', 'red',)
	const start = appendNewItem.bind(undefined, sections[1], 'Delete', 'red', 'Finish', 'orange',)
	const finish = appendNewItem.bind(undefined, sections[2], '', '', '', '')

	document.addEventListener('click', (e) => {
		if (e.target.tagName === 'BUTTON') {
			e.preventDefault()
			const action = e.target.className
			const values = inputFields.map(x => x.value)
			const workValues = [values[0], `Description: ${values[1]}`, `Due Date: ${values[2]}`]

			const getData = () =>
				Array.from(e.target.parentNode.parentNode.children)
					.map(x => x.innerHTML)

			const actions = {
				'': () => {
					if (isValidInput(values)) {
						add(e.target, ...workValues)
						clearInput()
					}
				},
				'green': () => {
					start(e.target, ...getData())
					remove(e.target)
				},
				'orange': () => {
					finish(e.target, ...getData())
					remove(e.target)
				},
				'red': () => remove(e.target)
			}

			actions[action]()
		}
	})
}