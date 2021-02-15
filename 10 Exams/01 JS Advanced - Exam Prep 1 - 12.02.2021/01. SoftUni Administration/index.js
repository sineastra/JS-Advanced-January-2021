function solve (e) {
	const html = {
		lectNameField: document.querySelectorAll(`input`)[0],
		dateField: document.querySelectorAll(`input`)[1],
		moduleNameField: document.getElementsByTagName('select')[0],
		modules: document.getElementsByClassName('modules')[0]
	}

	// template for the DOM element for a single lecture - li
	// we add our property 'date' for easy sorting
	const lectureTemplate = (date, lectureName) => {
		const li = document.createElement('li')

		li.className = 'flex'
		li.innerHTML = `<h4>${lectureName} - ${date}</h4>
		<button class='red'>Del</button>`
		li.date = date

		return li
	}

	// template for the whole module element - div
	// here we reuse the lecture template but we need to append it
	// so we can use the .date prop we added to it.
	const moduleTemplate = (moduleName, date, lectureName) => {
		const moduleDiv = document.createElement('div')
		moduleDiv.className = 'module'
		moduleDiv.innerHTML = `<h3>${moduleName}</h3>`

		const moduleLectures = document.createElement('ul')
		moduleLectures.appendChild(lectureTemplate(date, lectureName))

		moduleDiv.appendChild(moduleLectures)

		return moduleDiv
	}

	// medium-generic fn for a valid input :-D
	const isValidInpit = (lectureName, date, moduleName) => lectureName !==
		'' && date !== '' && moduleName !== 'Select module'


	// helper functions
	const formatDate = (s) => s.replace(/-/g, '/').replace('T', ' - ')
	const formatName = (n) => `${n.toLocaleUpperCase()}-MODULE`
	const clearInput = () => {
		html.lectNameField.value = ''
		html.dateField.value = ''
		html.moduleNameField.value = 'Select module'
	}

	document.addEventListener('click', (e) => {

			// on 'Add' Button click
			if (e.target.tagName === 'BUTTON' && e.target.innerHTML === 'Add') {
				e.preventDefault()
				const [lectureName, date, moduleName] = [
					html.lectNameField.value,
					formatDate(html.dateField.value),
					formatName(html.moduleNameField.value)
				]

				if (isValidInpit(lectureName, date, moduleName)) {
					// if there is added module with the same name ->
					const sameModule = Array.from(html.modules.children)
						.find(x => x.children[0].innerHTML === moduleName)

					if (sameModule) {
						const lecturesContainer = sameModule.children[1]
						const lectures = Array.from(lecturesContainer.children)

						// here we take all lectures, make them array, we push
						// the new lecture, sort them by date, and append them
						// to the module section
						lectures.push(lectureTemplate(date, lectureName))
						lectures.sort((a, b) => a.date.localeCompare(b.date))
						lectures.forEach(
							lecture => lecturesContainer.appendChild(lecture)
						)
					} else {
						// if the module does not exist, we make whole new
						// module and append it to the modules section.
						html.modules.appendChild(moduleTemplate(
							moduleName,
							date,
							lectureName
						))
					}
					clearInput()
				}
			}

			// on 'Del' button click
			if (e.target.tagName === 'BUTTON' && e.target.innerHTML === 'Del') {
				const moduleSection = e.target.parentNode.parentNode.parentNode

				e.target.parentNode.outerHTML = '' // delete lecture element

				if (moduleSection.children[1].children.length === 0) { // if no more lectures in module
					moduleSection.outerHTML = '' // delete module element
				}
			}
		}
	)
}