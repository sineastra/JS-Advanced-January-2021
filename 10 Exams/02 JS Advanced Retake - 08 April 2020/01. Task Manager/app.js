// TODO: refactor

function solve () {
	const taskName = document.getElementById(`task`)
	const taskDesc = document.getElementById(`description`)
	const taskDate = document.getElementById(`date`)
	const [open, progress, complete] = Array.from(document
		.getElementsByTagName('section')).map(x => x.children[1]).slice(1)
	const currentState = {}

	function templFact (n, d, da, b1, c1, b2, c2) {
		const article = document.createElement('article')

		article.innerHTML = `<h3>${n}</h3><p>${d}</p>
<p>${da}</p>`
		article.innerHTML += b1 ? `<div class="flex">
<button class=${c1}>${b1}</button>
<button class=${c2}>${b2}</button>
</div>` : ''
		return article
	}

	function add (n, d, da, b1, c1, b2, c2) {
		if (taskName.value !== '' && taskDesc.value !== '' &&
			taskDate.value !== '') {
			open.appendChild(
				templFact(n, `Description: ${d}`, `Due Date: ${da}`, b1, c1, b2, c2))
			taskName.value = ''
			taskDesc.value = ''
			taskDate.value = ''
		}
	}

	function start (e, n, d, da, b1, c1, b2, c2) {
		progress.appendChild(
			templFact(n, d, da, b1, c1, b2, c2))
		e.target.parentNode.parentNode.outerHTML = ''
	}

	function finish (e, n, d, da) {
		complete.appendChild(templFact(n, d, da))
		e.target.parentNode.parentNode.outerHTML = ''
	}

	function remove (e) {
		e.target.parentNode.parentNode.outerHTML = ''
	}

	document.addEventListener('click', (e) => {
		if (e.target.tagName === 'BUTTON') {
			e.preventDefault()
			const action = e.target.className

			const actions = {
				'': () => add(
					taskName.value,
					taskDesc.value,
					taskDate.value,
					'Start',
					'green',
					'Delete',
					'red'
				),
				'green': () => start(
					e,
					e.target.parentNode.parentNode.children[0].innerHTML,
					e.target.parentNode.parentNode.children[1].innerHTML,
					e.target.parentNode.parentNode.children[2].innerHTML,
					'Delete',
					'red',
					'Finish',
					'orange'
				),
				'orange': () => finish(
					e,
					e.target.parentNode.parentNode.children[0].innerHTML,
					e.target.parentNode.parentNode.children[1].innerHTML,
					e.target.parentNode.parentNode.children[2].innerHTML,
				),
				'red': () => remove(e)
			}

			actions[action]()
		}
	})
}