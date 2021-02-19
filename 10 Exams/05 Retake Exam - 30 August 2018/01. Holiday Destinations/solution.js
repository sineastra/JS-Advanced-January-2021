function addDestination () {
	const html = {
		city: document.getElementsByClassName('inputData')[0],
		country: document.getElementsByClassName('inputData')[1],
		seasons: document.getElementById(`seasons`),
		outputE: document.getElementById('destinationsList'),
	}

	function createRow (d, s) {
		const rowE = document.createElement('tr')
		const destination = document.createElement('td')
		const season = document.createElement('td')

		destination.innerHTML = d
		season.innerHTML = `${s[0].toLocaleUpperCase()}${s.slice(1)}`

		rowE.appendChild(destination)
		rowE.appendChild(season)

		return rowE
	}

	function updateSeason () {
		const season = document.getElementById(html.seasons.value.toLocaleLowerCase())

		season.value = Number(season.value) + 1
	}

	function clearInput () {
		html.city.value = ''
		html.country.value = ''
		html.seasons.selected = 'Summer'
	}

	function isValidInput () {
		return html.city.value !== '' && html.country.value !== ''
	}

	function getData () {
		return [`${html.city.value}, ${html.country.value}`, html.seasons.value]
	}

	if (isValidInput()) {
		html.outputE.appendChild(createRow(...getData()))
		updateSeason()
		clearInput()
	}
}