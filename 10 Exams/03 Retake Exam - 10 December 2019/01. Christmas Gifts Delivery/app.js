function solution () {
	const cardLists = document.querySelectorAll(`.container section ul`)
	const inputField = document.querySelector('input')

	function giftTemplFactory (moved, name) {
		const li = document.createElement('li')

		li.className = 'gift'
		li.innerHTML =
			`${name}${moved
				? `<button id="sendButton">Send</button><button id="discardButton">Discard</button>`
				: ''}`

		return li
	}

	const appendToSection = (s, e) => {
		s.appendChild(giftTemplFactory(false, e.parentNode.childNodes[0].textContent))
		e.parentNode.outerHTML = ''
	}

	document.addEventListener('click', (e) => {
		if (e.target.tagName === 'BUTTON') {
			const action = e.target.id

			const actions = {
				'': () => {
					const listOfGifts = cardLists[0]
					const gifts = Array.from(listOfGifts.children)

					gifts.push(giftTemplFactory(true, inputField.value))
					gifts.sort((a, b) => a.innerHTML.localeCompare(b.innerHTML))
					gifts.forEach(gift => listOfGifts.appendChild(gift))
					inputField.value = ''

				},
				'sendButton': () => appendToSection(cardLists[1], e.target),
				'discardButton': () => appendToSection(cardLists[2], e.target),
			}

			actions[action]()
		}
	})
}