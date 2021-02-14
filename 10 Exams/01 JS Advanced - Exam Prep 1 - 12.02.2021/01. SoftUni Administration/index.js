/* I have this feeling every time i write code for the judge that
its unit tests are weird. Thats why i write the most
simplified and braindead code i possibly can.
For my NO-surprise it goes 100/100 every time.

TODO: refactor it.
 */

function solve (e) {
	const [lectureName, date] = document.querySelectorAll(`input`)
	const moduleInput = document.getElementsByTagName('select')[0]
	const modules = document.getElementsByClassName('modules')[0]

	const liTemp = (d, l) => {
		const li = document.createElement('li')

		li.className = 'flex'
		li.innerHTML = `<h4>${l} - ${d}</h4>
		<button class='red'>Del</button>`

		return li
	}

	const mainTemp = (n, d, l) => {
		const wrapper = document.createElement('div')
		wrapper.className = 'module'

		wrapper.innerHTML = `<h3>${n}</h3>
<ul>${liTemp(d, l).outerHTML}</ul>`

		return wrapper
	}

	const formatDate = (s) => s.replace(/-/g, '/').replace('T', ' - ')
	const formatName = (n) => `${n.toLocaleUpperCase()}-MODULE`

	document.addEventListener('click', (e) => {
			if (e.target.tagName === 'BUTTON' && e.target.innerHTML === 'Add') {
				e.preventDefault()
				if (lectureName.value !== '' && date.value !== '' &&
					moduleInput.value !== 'Select module') {

					const allModules = Array.from(modules.children)
					const sameIndex = allModules.findIndex(x =>
						x.childNodes[0].innerHTML.includes(moduleInput.value.toLocaleUpperCase()))

					if (sameIndex !== -1) {
						let items = Array.from(allModules[sameIndex].children[1].children)
						items.push(liTemp(formatDate(date.value), lectureName.value))
						items =
							items.sort((a, b) => {
								const firstDate = a.children[0].innerHTML.split(' - ')
									.slice(1).join(' - ')
								const secondDate = b.children[0].innerHTML.split(' - ')
									.slice(1).join(' - ')

								return firstDate.localeCompare(secondDate)
							})

						items.forEach(x => allModules[sameIndex].children[1].appendChild(x))
					} else {
						modules.appendChild(mainTemp(
							formatName(moduleInput.value),
							formatDate(date.value),
							lectureName.value,
							)
						)
					}

					lectureName.value = ''
					date.value = ''
					moduleInput.value = 'Select module'
				}
			}

			if (e.target.tagName === 'BUTTON' && e.target.innerHTML ===
				'Del') {
				const moduleSection = e.target.parentNode.parentNode.parentNode

				e.target.parentNode.outerHTML = ''
				if (moduleSection.children[1].children.length === 0) {
					moduleSection.outerHTML = ''
				}
			}
		}
	)
}