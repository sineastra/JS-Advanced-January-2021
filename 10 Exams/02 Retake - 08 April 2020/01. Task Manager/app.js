function solve () {
	const inputFields = [
		document.getElementById(`task`),
		document.getElementById(`description`),
		document.getElementById(`date`),
	]

	//take the second div from each section (without the first, which is the input section)
	// as we will append created articles there.
	const sections = Array.from(document.getElementsByTagName('section'))
		.slice(1)
		.map(x => x.children[1])

	// the template function which makes every item
	// paremeters are (button, class, button1, class1, name, description, date)
	function articleTemplFactory (b, c, b1, c1, n, d, da) {
		const article = document.createElement('article')

		article.innerHTML = `<h3>${n}</h3><p>${d}</p>
<p>${da}</p>`

		// if we dont have first button passed as argument (b)
		// then we dont have buttons section so we add nothing to the innerHTML
		// this is made for little generalization of the template function
		article.innerHTML += b !== ''
			? `<div class="flex">
<button class=${c}>${b}</button>
<button class=${c1}>${b1}</button>
</div>`
			: ''

		return article
	}

	// helper functions for - checking for valid input, - clear the input and remove whole item
	// from the perspective of the delete button
	const isValidInput = (arr) => arr.every(x => x !== '')
	const clearInput = (arr) => arr.forEach(x => x.value = '')
	const remove = (e) => e.parentNode.parentNode.outerHTML = ''

	// a bridge for binding
	// it creates new article with the articleTemplFactory parameters explained above
	// and appends it on section depending on the s parameter
	const appendNewItem = (s, b, c, b1, c1, n, d, da) =>
		s.appendChild(articleTemplFactory(b, c, b1, c1, n, d, da))

	// partial application for every function for the section it must append to,
	// and the types of buttons it must have as well as the classes
	const add = appendNewItem.bind(undefined, sections[0], 'Start', 'green', 'Delete', 'red',)
	const start = appendNewItem.bind(undefined, sections[1], 'Delete', 'red', 'Finish', 'orange',)
	const finish = appendNewItem.bind(undefined, sections[2], '', '', '', '')

	document.addEventListener('click', (e) => {
		if (e.target.tagName === 'BUTTON') {
			e.preventDefault()

			// since we cant touch the html, every button we add has className except
			// for the Add button -> the one we didnt create. We will use the class for action
			// and for the Add button, the className is '', since it dont have any
			const action = e.target.className
			const values = inputFields.map(x => x.value)

			// we use the values from inputfields only for the add function.
			// other functions just take the innerHTML of the item created by add(), so.
			// we must fix the Description and Due Date elements innerHTML here.
			const workValues = [values[0], `Description: ${values[1]}`, `Due Date: ${values[2]}`]

			// this is the helper function that takes the innerHTML of all 3 fields,
			// 'Title, Description and Date', I talked about just in the comment above
			const getData = () =>
				Array.from(e.target.parentNode.parentNode.children)
					.map(x => x.innerHTML)

			//actions depending on className of clicked button
			// add function is little different, needs a validation and clear of input fields
			// all we need to pass are the 3 arguments, which for add are the raw workValues
			// and for the others are the innerHTML's taken from the current event.target
			const actions = {
				'': () => {
					if (isValidInput(values)) {
						add(...workValues)
						clearInput(inputFields)
					}
				},
				'green': () => {
					start(...getData())
					remove(e.target)
				},
				'orange': () => {
					finish(...getData())
					remove(e.target)
				},
				'red': () => remove(e.target)
			}

			// execution of the action
			actions[action]()
		}
	})
}